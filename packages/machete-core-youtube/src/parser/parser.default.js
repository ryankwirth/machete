import config from '../config'
import utils from '../utils'

function parseSearchVideo($, el) {
  return parseVideo($(el), {
    label: '.yt-lockup-title a',
    owner: '.yt-lockup-byline',
    videoId: 'context-item-id'
  })
}

// Given a cheerio instance and a video row element,
// extract the track information
function parsePlaylistVideo($, el) {
  return parseVideo($(el), {
    label: '.pl-video-title-link',
    owner: '.pl-video-owner a',
    videoId: 'video-id'
  })
}

// Given a video element and a collection of XPaths/selectors,
// extract the track information
function parseVideo($el, opts) {
  // Locate the pieces of data within the video element
  const label = $el.find(opts.label).text()
  const owner = $el.find(opts.owner).text()
  const videoId = $el.data(opts.videoId)
  
  // Generate the result object properties
  const id = utils.encodeId('video', videoId)
  const thumbnail = `${config.urls.thumbnailUrl}${videoId}/mqdefault.jpg`
  const { title, artist: subtitle } = utils.parseLabel(label.trim(), owner.trim())

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

  search(query) {
    return this.injectable.get(config.urls.searchUrl + query)
    .then(($) => $('.yt-lockup-video').map((i, el) => parseSearchVideo($, el)).get())
  },

  scrapePlaylist(playlistId) {
    return this.injectable.get(config.urls.playlistUrl + playlistId)
      .then(($) => $('tr').map((i, el) => parsePlaylistVideo($, el)).get())
  }
}
