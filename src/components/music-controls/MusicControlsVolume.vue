<template>
  <div class="music-controls-volume">
    <Buttons
      :volume="activeVolume"
      @setVolume="onUpdateVolume"
    />
    <Scrubber
      :total="100"
      :value="activeVolume"
      @setValue="onUpdateVolume"
      @updateValue="onUpdateVolume"
    />
  </div>
</template>

<script>
import Buttons from './MusicControlsVolumeButtons.vue'
import Scrubber from './MusicControlsScrubber.vue'

export default {
  name: 'MusicControlsVolume',
  components: {
    Buttons,
    Scrubber
  },
  data() {
    return {
      modified: false,
      modifiedVolume: 0
    }
  },
  computed: {
    activeVolume() {
      return this.modified ? this.modifiedVolume : 50
    }
  },
  methods: {
    onSetVolume(volume) {
      // TODO: Pass this new value to the core service
    },
    onUpdateVolume(volume) {
      this.modified = true
      this.modifiedVolume = volume
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-volume {
  display: flex;
  align-items: center;
  flex: 0 0 300px;
  margin: 0px 16px;
}
</style>
