import DefaultParser from './parser.default'
import MusicParser from './parser.music'

export default {
  init(injectable) {
    return Promise.all([
      DefaultParser.init(injectable),
      MusicParser.init(injectable)
    ])
  },

  search(options) {
    return DefaultParser.search(options)
  },

  scrapePlaylist(playlistId) {
    return DefaultParser.scrapePlaylist(playlistId)
  },

  scrapeShowcase() {
    return MusicParser.scrapeShowcase()
  }
}
