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
      :duration="245"
      :timestamp="130"
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
  align-items: center;
  padding: 16px;
}
</style>
