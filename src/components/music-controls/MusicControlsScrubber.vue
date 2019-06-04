<template>
  <div class="music-controls-scrubber" ref="scrubber" @click="onClick">
    <div class="track cb-primary-variant">
      <div class="fill cb-accent" :style="fillStyle"></div>
    </div>
    <div class="handle" :style="handleStyle" @mousedown="onMouseDown">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsScrubber',
  data() {
    return {
      isDragging: false,
      draggingPercentage: 0
    }
  },
  computed: {
    bounds() {
      return this.$refs.scrubber.getBoundingClientRect()
    },
    fillStyle() {
      return { width: `${this.draggingPercentage}%` }
    },
    handleStyle() {
      return { left: `${this.draggingPercentage}%` }
    }
  },
  methods: {
    onClick(event) {
      this.setPercentage(event.clientX)
    },
    onMouseDown() {
      this.isDragging = true
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseUp() {
      this.isDragging = false
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove(event) {
      this.setPercentage(event.clientX)
    },
    setPercentage(clientX) {
      const xPosition = clientX - this.bounds.left
      this.draggingPercentage = (xPosition / this.bounds.width) * 100
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-scrubber {
  position: relative;
  width: 100%;
  padding: 16px 0px;

  .track {
    overflow: hidden;
    width: 100%;
    height: 4px;
    border-radius: 2px;

    .fill {
      height: 100%;
    }
  }

  .handle {
    position: absolute;
    margin: -26px 0px 0px -24px;
    padding: 16px;
    cursor: pointer;

    .inner {
      width: 16px;
      height: 16px;
      background-color: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 1px 4px #545454;
    }

    &:hover .inner {
      box-shadow: 0px 1px 8px #121212;
    }
  }
}
</style>
