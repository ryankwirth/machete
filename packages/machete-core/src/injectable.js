import cheerio from 'cheerio'
import needle from 'needle'
import EventBus from './event-bus'

const Injectable = {
  init(options) {
    this.options = options || {}
  },

  get(url, options) {
    const proxy = this.options.proxy || ''
    return needle('get', proxy + url, options)
      .then((response) => response.body)
      .then((body) => cheerio.load(body))
  },

  dispatch(type, payload) {
    EventBus.dispatch(type, payload)
  }
}

export default Injectable
