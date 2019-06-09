import config from './config'

function injectAPI() {
  return new Promise((resolve) => {
    const tag = document.createElement('script')
    tag.src = config.urls.iframeApiUrl
    document.body.appendChild(tag)

    window.onYouTubeIframeAPIReady = resolve
  })
}

function injectPlayer(options) {
  return new Promise((resolve) => {
    const tag = document.createElement('div')
    tag.id = 'player'
    tag.style = 'position: absolute'
    document.body.appendChild(tag)

    // eslint-disable-next-line no-undef
    const player = new YT.Player('player', {
      height: '0',
      width: '0',
      events: {
        onReady: () => resolve(player),
        onStateChange: () => {
          // Retrieve the latest video data
          const { author: artist, title, video_id } = player.getVideoData()
          const duration = player.getDuration()
          const artwork = `https://img.youtube.com/vi/${video_id}/0.jpg`

          // If a callback was provided, pass back the metadata
          if (options.onReceiveMetadata) {
            options.onReceiveMetadata({ artist, artwork, duration, title })
          }
        }
      }
    })
  })
}

const YouTubePlayer = {
  init(options) {
    return injectAPI()
      .then(() => injectPlayer(options))
      .then((player) => {
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
