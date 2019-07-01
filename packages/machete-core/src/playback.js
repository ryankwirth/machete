import { EventType, StateType } from 'machete-core'
import { EventBus, Queue } from './utils'

function onPlaybackStatus(state) {
  if (state === StateType.FINISHED) {
    Playback.next()
  }
}

function playAt(delta = 1) {
  // If another service is playing, stop it.
  Playback.stop(false)

  // Get the next URI to play.
  const uri = Queue.get(delta)

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
      this.next()
    }
  },

  play(uri) {
    switch (typeof uri) {
      case 'number':
        // Move the queue to the given position and play from there.
        Queue.set(uri)
        playAt(0)
        return
      case 'string':
        // Insert the given URI into the queue and start playing.
        this.queue(uri, true)
        return
      default:
        // Otherwise, play the current track
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
    playAt(1)
  },

  previous() {
    playAt(-1)
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
