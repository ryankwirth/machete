const EventBus = {
  init() {
    this.listeners = {}
  },

  on(type, callback) {
    if (!this.listeners[type]) {
      this.listeners[type] = [ callback ]
    } else {
      this.listeners[type].push(callback)
    }
  },

  off(type, callback) {
    if (this.listeners[type]) {
      this.listeners[type] = this.listeners[type]
        .filter((listenerCallback) => listenerCallback !== callback)
    }
  },

  dispatch(type, payload) {
    if (this.listeners[type]) {
      this.listeners[type].map((callback) => callback(payload))
    }
  }
}

export default EventBus
