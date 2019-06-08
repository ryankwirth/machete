<template>
  <div class="music-controls-playback-timestamp">
    <span class="c-secondary-variant">{{ formattedTimestamp }} / </span>
    <span class="c-primary-variant">{{ formattedDuration }}</span>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsPlaybackTimestamp',
  props: {
    duration: Number,
    timestamp: Number
  },
  computed: {
    formattedDuration() {
      return this.formatTime(this.duration)
    },
    formattedTimestamp() {
      return this.formatTime(this.timestamp)
    }
  },
  methods: {
    formatTime(time) {
      const minutes = Math.floor(time / 60)
      const seconds = time - (minutes * 60)
      const minutesLeadingZero = minutes < 10 ? '0' : ''
      const secondsLeadingZero = seconds < 10 ? '0' : ''
      return `${minutesLeadingZero}${minutes}:${secondsLeadingZero}${seconds}`
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-playback-timestamp {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
</style>
