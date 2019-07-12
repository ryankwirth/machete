<template>
  <div class="music-controls-playback-timestamp">
    <span class="color-header">{{ formatTime(timestamp) }} / </span>
    <span class="color-navigation">{{ formatTime(duration) }}</span>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsPlaybackTimestamp',
  props: {
    timestamp: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    duration() {
      return this.$coreData.song.duration || 0;
    },
  },
  methods: {
    formatTime(time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor(time / 60 - hours * 60);
      const seconds = Math.floor(time - (minutes * 60) - (hours * 3600));
      const minutesLeadingZero = minutes < 10 ? '0' : '';
      const secondsLeadingZero = seconds < 10 ? '0' : '';
      return `${hours > 9 ? hours + ':' : ''}
              ${minutesLeadingZero}${minutes}:
              ${secondsLeadingZero}${seconds}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.music-controls-playback-timestamp {
  flex: 0 0 auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
</style>
