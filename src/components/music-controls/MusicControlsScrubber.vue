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
  props: {
    duration: Number,
    timestamp: Number
  },
  computed: {
    bounds() {
      return this.$refs.scrubber.getBoundingClientRect()
    },
    percentage() {
      return (this.timestamp / this.duration) * 100
    },
    fillStyle() {
      return { width: `${this.percentage}%` }
    },
    handleStyle() {
      return { left: `${this.percentage}%` }
    }
  },
  methods: {
    computeTimestamp(event) {
      const xPosition = event.clientX - this.bounds.left
      const timestamp = Math.floor((xPosition / this.bounds.width) * this.duration)
      return Math.min(Math.max(timestamp, 0), this.duration)
    },
    onClick(event) {
      this.setTimestamp(event)
    },
    onMouseDown() {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseUp(event) {
      this.setTimestamp(event)
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove(event) {
      this.updateTimestamp(event)
    },
    setTimestamp(event) {
      this.$emit('setTimestamp', this.computeTimestamp(event))
    },
    updateTimestamp(event) {
      this.$emit('updateTimestamp', this.computeTimestamp(event))
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
