<template>
  <footer
    v-if="isPlaying"
    class="music-controls color-background-bg color-gutter-border"
  >
    <Buttons />
    <Playback />
    <Volume />
  </footer>
</template>

<script>
import { StateType } from 'machete-core'
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
  computed: {
    isPlaying() {
      return this.$coreData.state !== StateType.STOPPED
    }
  }
}
</script>

<style scoped>
.music-controls {
  display: flex;
  align-items: stretch;

  position: fixed;
  bottom: 0;

  width: calc(100% - 24px * 2);
  padding: 24px;
  border-top: 1px solid;
  cursor: default;
}
</style>
