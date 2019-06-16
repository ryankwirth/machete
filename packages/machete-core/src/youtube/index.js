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

  getMostPopular() {
    return parser.scrapePlaylist(config.playlistIds.mostPopular)
  }
}

export default YouTubeService
