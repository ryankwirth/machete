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
function parseVideo(el, opts) {
  // Locate the pieces of data within the video element
  const link = el.querySelector(opts.link)
  const owner = el.querySelector(opts.owner)

  // Parse the link's `href` to find our video ID
  const href = link.attributes.href.match(/v=([^&]+)/)
  const id = href && href[1]

  // Generate the result object properties
  const thumbnail = `${config.urls.thumbnailUrl}${id}/mqdefault.jpg`
  const { title, artist: subtitle } = utils.parseLabel(link.text.trim(), owner.text.trim())

  return {
    id,
    title,
    subtitle,
    thumbnail,
    slug: config.slug,
    type: ItemType.SONG,
    playlistId: opts.playlistId
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
