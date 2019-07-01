export const Queue = {
  init() {
    this.index = -1
    this.items = []
  },

  reset() {
    this.init()
  },

  add(item, toFront = false) {
    if (toFront) {
      this.items.splice(this.index, 0, item)
    } else {
      this.items.push(item)
    }
  },

  get(delta = 0) {
    if (this.items.length === 0) {
      return null
    } else {
      // Move the index forward/backward by `delta` and wrap if necessary.
      this.set(this.index + delta)
      return this.items[this.index]
    }
  },

  set(newIndex) {
    if (this.items.length === 0) {
      this.index = -1
    } else {
      newIndex = newIndex % this.items.length
      this.index = newIndex < 0 ? this.items.length - 1 : newIndex
    }
  }
}
