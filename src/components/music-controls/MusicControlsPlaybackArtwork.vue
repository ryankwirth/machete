<template>
  <div
    class="music-controls-playback-artwork"
    :style="styles"
  />
</template>

<script>
export default {
  name: 'MusicControlsPlaybackArtwork',
  props: {
    artwork: String
  },
  computed: {
    styles() {
      if (this.artwork) {
        return {
          backgroundImage: `url(${this.artwork})`,
          backgroundSize: 'cover'
        }
      } else {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-playback-artwork {
  flex: 0 0 auto;

  width: 96px;
  height: 96px;
  margin-right: 24px;

  background-image: url('../../assets/images/spinner.gif');
  background-position: center;
  background-repeat: no-repeat;
}
</style>
