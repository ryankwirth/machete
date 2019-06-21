import config from './config'
import utils from './utils'

function parseSearchVideo($, el) {
  const label = $(el).find('.yt-lockup-title a').text()
  const owner = $(el).find('.yt-lockup-byline').text()
  const { title, artist } = utils.parseLabel(label.trim(), owner.trim())

  const videoId = $(el).data('context-item-id')
  const thumbnail = $(el).find('img').attr('src')
  const timestamp = $(el).find('.video-time').text()
  const id = `${config.slug}://${videoId}`
  const length = utils.parseTimestamp(timestamp)

  return {
    id,
    title,
    artist,
    thumbnail,
    length
  }
}

// Given a cheerio instance and a video row element,
// extract the track information
function parsePlaylistVideo($, el) {
  // Get the label data and extract title/artist information
  const label = $(el).find('.pl-video-title-link').text()
  const owner = $(el).find('.pl-video-owner a').text()
  const { title, artist } = utils.parseLabel(label.trim(), owner.trim())

  // Extract the other pieces of data we need
  const videoId = $(el).data('video-id')
  const thumbnail = $(el).find('img').data('thumb')
  const timestamp = $(el).find('.timestamp').text()
  const id = `${config.slug}://${videoId}`
  const length = utils.parseTimestamp(timestamp)

  return {
    id,
    title,
    artist,
    thumbnail,
    length
  }
}

const YouTubeParser = {
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

export default YouTubeParser
