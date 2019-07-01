import { ItemType } from 'machete-core'
import config from '../config'
import payload from '../assets/payload.music'

function parseShowcase(data) {
  const home = data.contents.singleColumnBrowseResultsRenderer.tabs[0]
  const contents = home.tabRenderer.content.sectionListRenderer.contents

  const renderers = contents
    .map((content) => content.musicImmersiveCarouselShelfRenderer || content.musicCarouselShelfRenderer)
    .filter((renderer) => !!renderer)

  return parseShowcaseCarouselRenderer(renderers[0])
}

function parseShowcaseCarouselRenderer(renderer) {
  const headerRenderer = renderer.header.musicCarouselShelfBasicHeaderRenderer
  const title = headerRenderer.title.runs[0].text
    .replace(/ \w/g, (t) => t.toUpperCase())

  const items = renderer.contents
    .map((content) => parseShowcaseMusicTwoRowItemRenderer(content.musicTwoRowItemRenderer))

  return { title, items }
}

function parseShowcaseMusicTwoRowItemRenderer(renderer) {
  // Combine all of the title/subtitle runs into a single string.
  const title = renderer.title.runs
    .map((run) => run.text)
    .join('')
  const subtitle = renderer.subtitle.runs
    .map((run) => run.text)
    .join('')

  // Dig deep to find a `watchEndpoint` or `watchPlaylistEndpoint` so we can
  // extract this item's playlistId.
  const overlayRenderer = renderer.thumbnailOverlay.musicItemThumbnailOverlayRenderer
  const playButtonRenderer = overlayRenderer.content.musicPlayButtonRenderer
  const navigationEndpoint = playButtonRenderer.playNavigationEndpoint
  const watchEndpoint = navigationEndpoint.watchEndpoint || navigationEndpoint.watchPlaylistEndpoint
  const id = watchEndpoint.playlistId

  // Get all of the thumbnail URLs, then return the last (best) one.
  const thumbnails = renderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails
  const thumbnail = thumbnails.pop().url

  return {
    id,
    title,
    subtitle,
    thumbnail,
    slug: config.slug,
    type: ItemType.PLAYLIST
  }
}

export default {
  init(injectable) {
    this.injectable = injectable
    return Promise.resolve()
  },

  scrapeShowcase() {
    return this.injectable.post(config.urls.musicUrl, payload)
      .then((response) => parseShowcase(response.data))
  }
}
