import DefaultParser from './parser.default'
import MusicParser from './parser.music'

export default {
  init(injectable) {
    return Promise.all([
      DefaultParser.init(injectable),
      MusicParser.init(injectable)
    ])
  },

  search(query) {
    return DefaultParser.search(query)
  },

  scrapePlaylist(playlistId) {
    return DefaultParser.scrapePlaylist(playlistId)
  },

  scrapeShowcase() {
    return MusicParser.scrapeShowcase()
  }
}
