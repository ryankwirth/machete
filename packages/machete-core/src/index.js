import { CoreService } from './core'

// Create a promise that will resolve once the service has been initialized
let resolve
const init = new Promise((_resolve) => {
  resolve = _resolve
})

// Define a "promisified" interface for the service
export default {
  init(services, options) {
    return CoreService.init(services, options).then(resolve)
  },

  queue(items) {
    return init
      .then(() => CoreService.queue(items))
  },

  play(item) {
    return init
      .then(() => CoreService.play(item))
  },

  pause() {
    return init
      .then(() => CoreService.pause())
  },

  stop() {
    return init
      .then(() => CoreService.stop())
  },

  next() {
    return init
      .then(() => CoreService.next())
  },

  previous() {
    return init
      .then(() => CoreService.previous())
  },

  seekTo(timestamp) {
    return init
      .then(() => CoreService.seekTo(timestamp))
  },

  setVolume(volume) {
    return init
      .then(() => CoreService.setVolume(volume))
  },

  get(type, options) {
    return init
      .then(() => CoreService.get(type, options))
  },

  on(type, callback) {
    return init
      .then(() => CoreService.on(type, callback))
  },

  off(type, callback) {
    return init
      .then(() => CoreService.off(type, callback))
  }
}
