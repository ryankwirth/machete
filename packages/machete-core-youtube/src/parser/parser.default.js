import {ItemType} from 'machete-core';
import config from '../config';
import utils from '../utils';

/**
 * Parses the given `.yt-lockup-video` element to find item data.
 * @param {HTMLElement} el The `.yt-lockup-video` element.
 * @return {Item}
 */
function parseSearchVideo(el) {
  return parseVideo(el, {
    link: '.yt-lockup-title a',
    owner: '.yt-lockup-byline',
  });
}

/**
 * Parses the given `.pl-video-title` element to find item data.
 * @param {HTMLElement} el The `.pl-video-title' element.
 * @param {String} playlistId The playlist this element is from.
 * @return {Item}
 */
function parsePlaylistVideo(el, playlistId) {
  return parseVideo(el, {
    link: '.pl-video-title-link',
    owner: '.pl-video-owner a',
    playlistId,
  });
}

/**
 * Parses the given video element to find item data.
 * @param {HTMLElement} el The video element to parse.
 * @param {Object} options The query selectors to use when parsing.
 * @return {Item}
 */
function parseVideo(el, {link, owner, playlistId}) {
  // Locate the pieces of data within the video element
  const linkEl = el.querySelector(link);
  const ownerEl = el.querySelector(owner);

  // Parse the link's `href` to find our video ID
  const href = linkEl.attributes.href.match(/v=([^&]+)/);
  const videoId = href && href[1];

  // Generate the result object properties
  const uri = utils.encodeUri(videoId);
  const thumbnail = `${config.urls.thumbnailUrl}${videoId}/mqdefault.jpg`;
  const {title, subtitle} = utils.parseLabel(
      linkEl.text.trim(),
      ownerEl.text.trim()
  );

  return {
    uri,
    title,
    subtitle,
    thumbnail,
    type: ItemType.SONG,
  };
}

export default {
  init(injectable) {
    this.injectable = injectable;
    return Promise.resolve();
  },

  search({query}) {
    return this.injectable.get(config.urls.searchUrl + query)
        .then((root) => root.querySelectorAll('.yt-lockup-video'))
        .then((els) => els.map((el) => parseSearchVideo(el)))
        .then((items) => ({title: `Search: "${query}"`, items}));
  },

  scrapePlaylist({id, title}) {
    return this.injectable.get(config.urls.playlistUrl + id)
        .then((root) => root.querySelectorAll('.pl-video-title'))
        .then((els) => els.map((el) => parsePlaylistVideo(el, id)))
        .then((items) => ({title, items}));
  },
};
