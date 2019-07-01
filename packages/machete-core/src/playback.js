import { EventType, StateType } from 'machete-core'
import { EventBus, Queue } from './utils'

function onPlaybackStatus(state) {
  if (state === StateType.FINISHED) {
    Playback.next()
  }
}

function playFromQueue(delta) {
  const item = Queue.get(delta)
  playFromItem(item)
}

function playFromItem(item) {
  // If another service is playing, stop it.
  Playback.stop(false)
  
  // Extract the service slug and track ID from the URI.
  const [slug, id] = item.id.split('://')
  Playback.activeService = Playback.services[slug]
  Playback.activeService.play(id)
}

export const Playback = {
  init(services) {
    this.activeService = null
    this.services = services

    Queue.init()
    EventBus.on(EventType.PLAYBACK_STATE, onPlaybackStatus)
  },

  queue(items) {
    Queue.add(items)
  },

  play(item) {
    switch (typeof item) {
      case 'number':
        // Move the queue to the given position and play from there.
        item = Queue.set(item)
      case 'string':
        // Fall-through from above.
        playFromItem(item)
        return
      default:
        // Otherwise, play the current track.
        if (this.activeService) {
          this.activeService.play()
        }
    }
  },

  pause() {
    if (this.activeService) {
      this.activeService.pause()
    }
  },

  stop(resetQueue = true) {
    if (this.activeService) {
      this.activeService.stop()
      this.activeService = null
    }

    if (resetQueue) {
      Queue.reset()
    }
  },

  next() {
    playFromQueue(1)
  },

  previous() {
    playFromQueue(-1)
  },

  seekTo(timestamp) {
    if (this.activeService) {
      this.activeService.seekTo(timestamp)
    }
  },

  setVolume(volume) {
    if (this.activeService) {
      this.activeService.setVolume(volume)
    }
  },
}
