import needle from 'needle'
import cheerio from 'cheerio'
import YouTubeService from './youtube'

const CoreService = {
  init() {
    // Initialize the YouTube service.
    YouTubeService.init(PageLoader)

    return Promise.resolve()
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
