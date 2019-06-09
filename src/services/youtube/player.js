import config from './config'

function injectAPI() {
  return new Promise((resolve) => {
    const tag = document.createElement('script')
    tag.src = config.urls.iframeApiUrl
    document.body.appendChild(tag)

    window.onYouTubeIframeAPIReady = resolve
  })
}

function injectPlayer() {
  return new Promise((resolve) => {
    const tag = document.createElement('div')
    tag.id = 'player'
    tag.style = 'position: absolute'
    document.body.appendChild(tag)

    const player = new YT.Player('player', {
      height: '0',
      width: '0',
      events: {
        onReady: () => resolve(player)
      }
    })
  })
}

const YouTubePlayer = {
  init() {
    return injectAPI()
      .then(injectPlayer)
      .then((player) => {
        // Keep a reference to the YT `player` object
        this.player = player
      })
  },

  play(id) {
    if (id) {
      this.player.loadVideoById(id)
    } else {
      this.player.playVideo()
    }
  },

  pause() {
    this.player.pauseVideo()
  },

  stop() {
    this.player.stopVideo()
  },

  seekTo(timestamp) {
    this.player.seekTo(timestamp)
  },

  setVolume(volume) {
    this.player.setVolume(volume)
  }
}

export default YouTubePlayer
