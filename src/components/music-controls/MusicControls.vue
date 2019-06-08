<template>
  <div class="music-controls">
    <Buttons
      :is-playing="isPlaying"
      @next="onNext"
      @play="onPlay"
      @pause="onPause"
      @previous="onPrevious"
    />
    <Playback
      artist="Drake"
      artwork="https://upload.wikimedia.org/wikipedia/en/a/ad/Drake_-_Scary_Hours.png"
      :duration="245"
      :timestamp="130"
      title="God's Plan"
    />
    <Volume/>
  </div>
</template>

<script>
import Buttons from './MusicControlsButtons.vue'
import Playback from './MusicControlsPlayback.vue'
import Volume from './MusicControlsVolume'

export default {
  name: 'MusicControls',
  components: {
    Buttons,
    Playback,
    Volume
  },
  data() {
    return {
      isPlaying: false
    }
  },
  methods: {
    onNext() {},
    onPlay() {
      this.isPlaying = true
    },
    onPause() {
      this.isPlaying = false
    },
    onPrevious() {}
  }
}
</script>

<style scoped>
.music-controls {
  display: flex;
  align-items: stretch;

  position: absolute;
  bottom: 0;

  width: calc(100% - 24px * 2);
  padding: 24px;
  cursor: default;
}
</style>
