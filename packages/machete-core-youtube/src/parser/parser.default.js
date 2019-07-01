import { ItemType } from 'machete-core'
import config from '../config'
import utils from '../utils'

function parseSearchVideo(el) {
  return parseVideo(el, {
    link: '.yt-lockup-title a',
    owner: '.yt-lockup-byline',
  })
}

// Given a cheerio instance and a video row element,
// extract the track information
function parsePlaylistVideo(el, playlistId) {
  return parseVideo(el, {
    link: '.pl-video-title-link',
    owner: '.pl-video-owner a',
    playlistId
  })
}

// Given a video element and a collection of XPaths/selectors,
// extract the track information
function parseVideo(el, { link, owner, playlistId }) {
  // Locate the pieces of data within the video element
  const linkEl = el.querySelector(link)
  const ownerEl = el.querySelector(owner)

  // Parse the link's `href` to find our video ID
  const href = linkEl.attributes.href.match(/v=([^&]+)/)
  const videoId = href && href[1]

  // Generate the result object properties
  const uri = utils.encodeUri(videoId)
  const playlistUri = utils.encodeUri(playlistId)
  const thumbnail = `${config.urls.thumbnailUrl}${videoId}/mqdefault.jpg`
  const { title, artist: subtitle } = utils.parseLabel(linkEl.text.trim(), ownerEl.text.trim())

  return {
    uri,
    title,
    subtitle,
    thumbnail,
    playlistUri,
    type: ItemType.SONG
  }
}

export default {
  init(injectable) {
    this.injectable = injectable
    return Promise.resolve()
  },

  search({ query }) {
    return this.injectable.get(config.urls.searchUrl + query)
    .then((root) => root.querySelectorAll('.yt-lockup-video'))
    .then((els) => els.map((el) => parseSearchVideo(el)))
    .then((items) => ({ title: `Search: "${query}"`, items }))
  },

  scrapePlaylist({ id, title }) {
    return this.injectable.get(config.urls.playlistUrl + id)
      .then((root) => root.querySelectorAll('.pl-video-title'))
      .then((els) => els.map((el) => parsePlaylistVideo(el, id)))
      .then((items) => ({ title, items }))
  }
}
