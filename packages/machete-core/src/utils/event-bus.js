export const EventBus = {
  init() {
    this.listeners = {};
  },

  on(type, callback) {
    if (!this.listeners[type]) {
      this.listeners[type] = [callback];
    } else {
      this.listeners[type].push(callback);
    }
  },

  off(type, callback) {
    if (this.listeners[type]) {
      const index = this.listeners[type].indexOf(callback);
      if (index !== -1) {
        this.listeners[type].splice(index, 1);
      }
    }
  },

  dispatch(type, payload) {
    if (this.listeners[type]) {
      this.listeners[type].forEach((callback) => callback(payload));
    }
  },
};
