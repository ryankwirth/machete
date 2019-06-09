import needle from 'needle'
import cheerio from 'cheerio'
import YouTubeService from './youtube'

const SERVICES = [
  YouTubeService
]

const CoreService = {
  init(options) {
    // Initialize all specified services.
    const promises = SERVICES.map((service) => service.init(options, PageLoader))
    return Promise.all(promises)
      .then((slugs) => {
        // Map each service's slug to its object
        // (eg. { "youtube": YouTubeService })
        this.services = slugs.reduce((obj, slug, i) => {
          obj[slug] = SERVICES[i]
          return obj
        }, {})

      })
  },

  play(uri) {
    if (this.activeService) {
      this.activeService.stop()
    }

    // Extract the service slug and track ID from the URI
    const [slug, id] = uri.split('://')
    this.activeService = this.services[slug]
    this.activeService.play(id)
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
    return YouTubeService.getMostPopular()
  }
}

const PageLoader = {
  get(url, options) {
    return needle('get', url, options)
      .then((response) => response.body)
      .then((body) => cheerio.load(body))
  }
}

export default CoreService
