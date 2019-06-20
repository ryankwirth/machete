<template>
  <div class="music-controls-playback-timestamp">
    <span class="color-header">{{ formattedTimestamp }} / </span>
    <span class="color-navigation">{{ formattedDuration }}</span>
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
      const hours = Math.floor(time / 3600)
      const minutes = Math.floor(time / 60 - hours * 60)
      const seconds = Math.floor(time - (minutes * 60) - (hours * 3600))
      const minutesLeadingZero = minutes < 10 ? '0' : ''
      const secondsLeadingZero = seconds < 10 ? '0' : ''
      return `${hours > 0 ? hours + ':' : ''}${minutesLeadingZero}${minutes}:${secondsLeadingZero}${seconds}`
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-playback-timestamp {
  flex: 0 0 auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
</style>
