<template>
  <div class="music-controls-playback-details">
    <span class="title color-header">{{ title }}</span>
    <span class="bullet color-navigation">{{ bullet }}</span>
    <span class="artist color-navigation">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsPlaybackDetails',
  computed: {
    title() {
      return this.$coreData.song.title || 'Loading...'
    },
    bullet() {
      return this.$coreData.song.uri ? '•' : ''
    },
    subtitle() {
      return this.$coreData.song.subtitle || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-playback-details {
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
    font-weight: 600;

    &.title {
      font-size: 22px;
    }

    &.bullet {
      font-size: 16px;
      margin: 0px 8px;
    }

    &.artist {
      font-size: 16px;
    }
  }
}
</style>
