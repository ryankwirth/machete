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
  // Ensure the video isn't muted; the user can change the volume later
  if (this.player.isMuted()) {
    this.player.unMute()
  }

  dispatchMetadata.call(this)
  dispatchStatus.call(this, e.data)
}

function dispatchMetadata() {
  // Dispatch the latest video data
  const videoData = this.player.getVideoData()
  const duration = this.player.getDuration()

  const id = utils.encodeId('video', videoData.video_id)
  const { artist, title } = utils.parseLabel(videoData.title, videoData.author)
  const thumbnail = `${config.urls.thumbnailUrl}${videoData.video_id}/mqdefault.jpg`

  this.injectable.dispatch(EventType.SONG_METADATA, { id, title, artist, thumbnail, duration })
}

function dispatchStatus(status) {
  switch (status) {
    case 0:
      this.injectable.dispatch(EventType.PLAYBACK_STATUS, StateType.FINISHED)
      break
    case 1:
      this.injectable.dispatch(EventType.PLAYBACK_STATUS, StateType.PLAYING)
      break
    case 2:
    case 3:
      this.injectable.dispatch(EventType.PLAYBACK_STATUS, StateType.PAUSED)
      break
  }
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

  play(id) {
    if (id) {
      const { type, assetId } = utils.decodeId(id)
      if (type === 'video') {
        this.player.loadVideoById(assetId)
      } else {
        this.player.loadPlaylist({ list: assetId })
      }
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
