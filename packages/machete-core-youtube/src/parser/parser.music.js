import {ItemType} from 'machete-core';
import config from '../config';
import utils from '../utils';
import payload from '../assets/payload.music';

/**
 * Parses the given showcase API response data to find result data.
 * @param {Object} data The YouTube Music API response data.
 * @return {Result}
 */
function parseShowcase(data) {
  const home = data.contents.singleColumnBrowseResultsRenderer.tabs[0];
  const contents = home.tabRenderer.content.sectionListRenderer.contents;

  const renderers = contents
      .map((content) =>
        content.musicImmersiveCarouselShelfRenderer ||
        content.musicCarouselShelfRenderer)
      .filter((renderer) => !!renderer);

  return parseShowcaseCarouselRenderer(renderers[0]);
}

/**
 * Parses the given `musicCarouselShelfRenderer` to find result data.
 * @param {Object} renderer The `musicCarouselShelfRenderer` to parse.
 * @return {Result}
 */
function parseShowcaseCarouselRenderer(renderer) {
  const headerRenderer = renderer.header.musicCarouselShelfBasicHeaderRenderer;
  const title = headerRenderer.title.runs[0].text
      .replace(/ \w/g, (t) => t.toUpperCase());

  const items = renderer.contents
      .map((content) =>
        parseShowcaseMusicTwoRowItemRenderer(content.musicTwoRowItemRenderer));

  return {title, items};
}

/**
 * Parses the given `musicTwoRowItemRenderer` to find item data.
 * @param {Object} renderer The `musicTwoRowItemRenderer` to parse.
 * @return {Item}
 */
function parseShowcaseMusicTwoRowItemRenderer(renderer) {
  // Combine all of the title/subtitle runs into a single string.
  const title = renderer.title.runs
      .map((run) => run.text)
      .join('');
  const subtitle = renderer.subtitle.runs
      .map((run) => run.text)
      .join('');

  // Dig deep to find a `watchEndpoint` or `watchPlaylistEndpoint` so we can
  // extract this item's playlistId.
  const {uri, type} = parsePlayNavigationEndpoint(
      renderer.thumbnailOverlay.musicItemThumbnailOverlayRenderer
          .content.musicPlayButtonRenderer.playNavigationEndpoint
  );

  // Get all of the thumbnail URLs, then return the last (best) one.
  const thumbnail = renderer.thumbnailRenderer.musicThumbnailRenderer
      .thumbnail.thumbnails.pop().url;

  return {
    uri,
    type,
    title,
    subtitle,
    thumbnail,
  };
}

/**
 * Parses the given `playNavigationEndpoint` to find uri/type data.
 * @param {Object} playNavigationEndpoint The `playNavigationEndpoint` to parse.
 * @return {Object} The item's URI and type.
 */
function parsePlayNavigationEndpoint(playNavigationEndpoint) {
  if (playNavigationEndpoint.watchEndpoint) {
    // If we have a `watchEndpoint,` then this item is a single video.
    const videoId = playNavigationEndpoint.watchEndpoint.videoId;
    return {
      uri: utils.encodeUri(videoId),
      type: ItemType.SONG,
    };
  } else if (playNavigationEndpoint.watchPlaylistEndpoint) {
    // If we have a `watchPlaylistEndpoint`, the item is a playlist.
    const playlistId = playNavigationEndpoint.watchPlaylistEndpoint.playlistId;
    return {
      uri: utils.encodeUri(playlistId),
      type: ItemType.PLAYLIST,
    };
  } else {
    throw new Error('Unknown `playNavigationEndpoint', playNavigationEndpoint);
  }
}

export default {
  init(injectable) {
    this.injectable = injectable;
    return Promise.resolve();
  },

  scrapeShowcase() {
    return this.injectable.post(config.urls.musicUrl, payload)
        .then((response) => parseShowcase(response.data));
  },
};
