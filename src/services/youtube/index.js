import config from './config'
import parser from './parser'

const YouTubeService = {
  init(pageLoader) {
    parser.init(pageLoader)
  },

  getMostPopular() {
    return parser.scrapePlaylist(config.playlistIds.mostPopular)
  }
}

export default YouTubeService
