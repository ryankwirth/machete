import { EventType, StateType } from 'machete-core'
import { EventBus, Queue } from './utils'

function onPlaybackStatus(state) {
  if (state === StateType.FINISHED) {
    playNext()
  }
}

function playNext() {
  // If another service is playing, stop it.
  Playback.stop(false)

  // Get the next URI to play.
  const uri = Queue.next()

  // Extract the service slug and track ID from the URI.
  const [slug, id] = uri.split('://')
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

  queue(uri, preempt = false) {
    // Add the new URI to the queue.
    Queue.add(uri, preempt)

    // If we preempted the current song, start playing the new one.
    if (preempt) {
      playNext()
    }
  },

  play(uri) {
    if (uri) {
      this.queue(uri, true)
    } else if (this.activeService) {
      this.activeService.play()
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
