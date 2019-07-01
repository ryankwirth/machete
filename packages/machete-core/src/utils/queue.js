export const Queue = {
  init() {
    this.items = []
  },

  push(item, toFront = false) {
    if (toFront) {
      this.items.unshift(item)
    } else {
      this.items.push(item)
    }
  },

  pop() {
    return this.items.shift()
  }
}
