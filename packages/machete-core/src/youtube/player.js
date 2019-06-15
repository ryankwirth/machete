import config from './config'
import utils from './utils'

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

    // eslint-disable-next-line no-undef
    this.player = new YT.Player('player', {
      height: '0',
      width: '0',
      events: {
        onReady: () => resolve(),
        onStateChange: (e) => onStateChange.call(this, e)
      }
    })
  })
}

function onStateChange(e) {
  // Dispatch the latest video data
  const videoData = this.player.getVideoData()
  const duration = this.player.getDuration()
  const { artist, title } = utils.parseLabel(videoData.title, videoData.author)
  const artwork = `${config.urls.thumbnailUrl}${videoData.video_id}/mqdefault.jpg`
  this.injectable.dispatch('metadata', { artist, artwork, duration, title })

  // Dispatch the current video status
  const isPlaying = e.data === 1
  const volume = this.player.getVolume()
  this.injectable.dispatch('status', { isPlaying, volume })
}

function startTimestampPolling() {
  if (!this.intervalId) {
    this.intervalId = setInterval(() => {
      this.injectable.dispatch('timestamp', this.player.getCurrentTime())
    }, 1000)
  }
}

function stopTimestampPolling() {
  if (this.intervalId) {
    clearInterval(this.intervalId)
    this.intervalId = null
  }
}

const YouTubePlayer = {
  init(injectable) {
    this.injectable = injectable

    return injectAPI()
      .then(() => injectPlayer.call(this))
  },

  play(id) {
    if (id) {
      this.player.loadVideoById(id)
    } else {
      this.player.playVideo()
    }

    // Start polling for timestamps
    startTimestampPolling.call(this)
  },

  pause() {
    this.player.pauseVideo()
    stopTimestampPolling.call(this)
  },

  stop() {
    this.player.stopVideo()
    stopTimestampPolling.call(this)
  },

  seekTo(timestamp) {
    this.player.seekTo(timestamp)
  },

  setVolume(volume) {
    this.player.setVolume(volume)
  }
}

export default YouTubePlayer
