import axios from 'axios'
import { parse } from 'node-html-parser'
import EventBus from './event-bus'

const Injectable = {
  init({ proxy }) {
    this.proxy = proxy || ''
  },

  get(url, options) {
    return axios.get(this.proxy + url, options)
      .then((response) => response.data)
      .then((data) => parse(data))
  },

  post(url, data, options) {
    return axios.post(this.proxy + url, data, options)
  },

  dispatch(type, payload) {
    EventBus.dispatch(type, payload)
  }
}

export default Injectable
