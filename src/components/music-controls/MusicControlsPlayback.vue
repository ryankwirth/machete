<template>
  <div class="music-controls-playback">
    <Scrubber/>
  </div>
</template>

<script>
import Scrubber from './MusicControlsScrubber.vue'

export default {
  name: 'MusicControlsPlayback',
  components: {
    Scrubber
  }
}
</script>

<style scoped>
.music-controls-playback {
  flex: 1 1 auto;
}
</style>
