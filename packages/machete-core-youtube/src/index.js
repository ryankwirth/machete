import { QueryType } from 'machete-core'

import config from './config'
import parser from './parser'
import player from './player'

const YouTubeService = {
  init(injectable) {
    return Promise.all([
      parser.init(injectable),
      player.init(injectable)
    ])
    .then(() => config.slug)
  },

  play(id) {
    player.play(id)
  },

  pause() {
    player.pause()
  },

  stop() {
    player.stop()
  },

  seekTo(timestamp) {
    player.seekTo(timestamp)
  },

  setVolume(volume) {
    player.setVolume(volume)
  },

  get(type, options) {
    switch(type) {
      case QueryType.SEARCH:
        return parser.search(options)
      case QueryType.SHOWCASE:
        return parser.scrapeShowcase()
      case QueryType.MOST_POPULAR:
        return parser.scrapePlaylist(config.playlistIds.mostPopular)
    }
  }
}

export default YouTubeService
