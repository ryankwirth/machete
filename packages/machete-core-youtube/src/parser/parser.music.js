import config from '../config'
import * as payload from '../assets/payload.json'

function parseShowcase(data) {
  const home = data.contents.singleColumnBrowseResultsRenderer.tabs[0]
  const contents = home.tabRenderer.content.sectionListRenderer.contents

  const renderers = contents
    .map((content) => content.musicImmersiveCarouselShelfRenderer || content.musicCarouselShelfRenderer)
    .filter((renderer) => !!renderer)

  return renderers.map(parseShowcaseCarouselRenderer)
}

function parseShowcaseCarouselRenderer(renderer) {
  const headerRenderer = renderer.header.musicCarouselShelfBasicHeaderRenderer
  const title = headerRenderer.title.runs[0].text

  const contents = renderer.contents
    .map((content) => parseShowcaseMusicTwoRowItemRenderer(content.musicTwoRowItemRenderer))

  return { title, contents }
}

function parseShowcaseMusicTwoRowItemRenderer(renderer) {
  const title = renderer.title.runs[0].text

  const overlayRenderer = renderer.thumbnailOverlay.musicItemThumbnailOverlayRenderer
  const playButtonRenderer = overlayRenderer.content.musicPlayButtonRenderer
  const playlistId = playButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId

  const thumbnails = renderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails
  const artwork = thumbnails[0].url

  return { title, playlistId, artwork }
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
