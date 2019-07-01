import { EventType, ItemType, QueryType, StateType } from 'machete-core'
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

  // Find the new service to use for this item.
  Playback.activeService = Playback.services[item.slug]
  if (item.type === ItemType.PLAYLIST) {
    // If the item is a playlist, get its items individually.
    Playback.activeService.get(QueryType.PLAYLIST, { id: item.id })
      .then((result) => {
        // Queue each one, then play the first item.
        Playback.queue(result.items)
        Playback.play(0)
      })
  } else {
    // Play the new item directly.
    Playback.activeService.play(item)
  }
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
      case 'object':
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
