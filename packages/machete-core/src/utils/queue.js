export const Queue = {
  init() {
    this.index = 0
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

  next() {
    if (this.items.length === 0) {
      return null
    } else {
      const item = this.items[this.index]
      this.index = (this.index + 1) % this.items.length
      return item
    }
  }
}
