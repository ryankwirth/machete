import config from '../config'
import utils from '../utils'

function parseSearchVideo(el) {
  return parseVideo(el, {
    link: '.yt-lockup-title a',
    owner: '.yt-lockup-byline'
  })
}

// Given a cheerio instance and a video row element,
// extract the track information
function parsePlaylistVideo(el) {
  return parseVideo(el, {
    link: '.pl-video-title-link',
    owner: '.pl-video-owner a'
  })
}

// Given a video element and a collection of XPaths/selectors,
// extract the track information
function parseVideo(el, opts) {
  // Locate the pieces of data within the video element
  const link = el.querySelector(opts.link)
  const owner = el.querySelector(opts.owner)

  // Parse the link's `href` to find our video ID
  const href = link.attributes.href.match(/v=([^&]+)/)
  const videoId = href && href[1]

  // Generate the result object properties
  const id = utils.encodeId('video', videoId)
  const thumbnail = `${config.urls.thumbnailUrl}${videoId}/mqdefault.jpg`
  const { title, artist: subtitle } = utils.parseLabel(link.text.trim(), owner.text.trim())

  return {
    id,
    title,
    subtitle,
    thumbnail
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
  },

  scrapePlaylist(playlistId) {
    return this.injectable.get(config.urls.playlistUrl + playlistId)
      .then((root) => root.querySelectorAll('.pl-video-title'))
      .then((els) => els.map((el) => parsePlaylistVideo(el)))
  }
}
