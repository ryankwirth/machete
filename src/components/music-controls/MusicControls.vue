<template>
  <div class="music-controls">
    <Buttons />
    <Playback />
    <Volume />
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
  }
}
</script>

<style scoped>
.music-controls {
  display: flex;
  padding: 2em;
}
</style>
