function playNext() {
  // If another service is playing, stop it.
  this.stop()

  // Get the next URI to play.
  const uri = this.queue.shift()

  // Extract the service slug and track ID from the URI.
  const [slug, id] = uri.split('://')
  this.activeService = this.services[slug]
  this.activeService.play(id)
}

export const Playback = {
  init(services) {
    this.activeService = null
    this.queue = []
    this.services = services
  },

  queue(uri, preempt = false) {
    // Add the new URI to the queue.
    if (preempt) {
      this.queue.unshift(uri)
    } else {
      this.queue.push(uri)
    }

    // If we're not playing anything or we're supposed to preempt the current
    // song, play the given URI immediately.
    if (!this.activeService || preempt) {
      playNext.call(this)
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

  stop() {
    if (this.activeService) {
      this.activeService.stop()
      this.activeService = null
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
