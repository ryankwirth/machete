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
      let newIndex = (this.index + delta) % this.items.length
      newIndex = newIndex < 0 ? this.items.length - 1 : newIndex

      this.index = newIndex
      return this.items[newIndex]
    }
  }
}
