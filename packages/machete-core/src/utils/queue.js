export const Queue = {
  init() {
    this.index = -1
    this.items = []
  },

  reset() {
    this.init()
  },

  add(items, toFront = false) {
    if (toFront) {
      this.items.splice(this.index, 0, ...items)
    } else {
      this.items.push(...items)
    }
  },

  get(delta = 0) {
    if (this.items.length === 0) {
      return null
    } else {
      // Move the index forward/backward by `delta` and wrap if necessary.
      return this.move(delta)
    }
  },

  move(delta) {
    return this.set(this.index + delta)
  },

  set(newIndex) {
    if (this.items.length === 0) {
      this.index = -1
    } else {
      newIndex = newIndex % this.items.length
      this.index = newIndex < 0 ? this.items.length - 1 : newIndex
    }
    return this.items[this.index]
  }
}
