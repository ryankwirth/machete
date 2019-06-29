import config from '../config'
import utils from '../utils'
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

  const items = renderer.contents
    .map((content) => parseShowcaseMusicTwoRowItemRenderer(content.musicTwoRowItemRenderer))

  return { title, items }
}

function parseShowcaseMusicTwoRowItemRenderer(renderer) {
  const title = renderer.title.runs[0].text

  const overlayRenderer = renderer.thumbnailOverlay.musicItemThumbnailOverlayRenderer
  const playButtonRenderer = overlayRenderer.content.musicPlayButtonRenderer
  const playlistId = playButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId

  const thumbnails = renderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails
  const thumbnail = thumbnails[0].url

  const id = utils.encodeId('playlist', playlistId)

  return {
    id,
    title,
    subtitle: 'YouTube Playlist',
    thumbnail
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
