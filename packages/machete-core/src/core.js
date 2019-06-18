import EventBus from './event-bus'
import Injectable from './injectable'

const CoreService = {
  init(services, options) {
    EventBus.init()
    Injectable.init(options)

    // Initialize all of the specified services.
    const promises = services.map((service) => service.init(Injectable))
    return Promise.all(promises)
      .then((slugs) => {
        // Map each service's slug to its instance
        // (eg. { "youtube": YouTubeService})
        this.services = slugs.reduce((obj, slug, i) => {
          obj[slug] = services[i]
          return obj
        }, {})
      })
  },

  play(uri) {
    if (uri) {
      // If a URI is provided, stop the current service
      if (this.activeService) {
        this.activeService.stop()
      }

      // Extract the service slug and track ID from the URI
      const [slug, id] = uri.split('://')
      this.activeService = this.services[slug]
      this.activeService.play(id)
    } else if (this.activeService) {
      // If no URI is provided, we're continuing to play from the same service
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

  getMostPopular() {
    // Get the most popular tracks from every service
    const promises = Object.values(this.services).map((service) => service.getMostPopular())
    return Promise.all(promises)
      .then((results) => results.flat())
  },

  on(type, callback) {
    EventBus.on(type, callback)
  },

  off(type, callback) {
    EventBus.off(type, callback)
  }
}

export default CoreService
