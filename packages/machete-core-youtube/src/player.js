import { EventType, StateType } from 'machete-core'
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
  // Ensure the video isn't muted; the user can change the volume later.
  if (this.player.isMuted()) {
    this.player.unMute()
  }

  dispatchState.call(this, e.data)
}

function dispatchState(status) {
  switch (status) {
    case 0:
      this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.FINISHED)
      break
    case 1:
      dispatchMetadata.call(this)
      this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.PLAYING)
      break
    case 2:
      this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.PAUSED)
      break
    case 3:
      this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.LOADING)
      break
  }
}

function dispatchMetadata() {
  // The only data we can't scrape is the duration; we'll get it from the
  // player, then dispatch it and the current item.
  const duration = this.player.getDuration()
  this.injectable.dispatch(EventType.SONG_METADATA, { duration, ...this.item })
}

function startTimestampPolling() {
  if (!this.intervalId) {
    this.intervalId = setInterval(() => {
      this.injectable.dispatch(EventType.PLAYBACK_TIMESTAMP, this.player.getCurrentTime())
    }, 1000)
  }
}

function stopTimestampPolling() {
  if (this.intervalId) {
    clearInterval(this.intervalId)
    this.intervalId = null
  }
}

export default {
  init(injectable) {
    this.injectable = injectable

    return injectAPI()
      .then(() => injectPlayer.call(this))
  },

  play(item) {
    if (item) {
      this.item = item
      this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.LOADING)

      // Get the video ID from the slugged URI.
      const videoId = utils.decodeUri(item.uri)
      this.player.loadVideoById(videoId)
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
    this.item = null
    this.player.stopVideo()
    this.injectable.dispatch(EventType.PLAYBACK_STATE, StateType.STOPPED)
    stopTimestampPolling.call(this)
  },

  seekTo(timestamp) {
    this.player.seekTo(timestamp)
  },

  setVolume(volume) {
    this.player.setVolume(volume)
  }
}
