<template>
  <div class="music-controls-volume">
    <Buttons
      :volume="volume"
      @setVolume="onSetVolume"
    />
    <Scrubber
      :total="100"
      :value="volume"
      @setValue="onSetVolume"
      @updateValue="onSetVolume"
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
  props: {
    volume: {
      type: Number,
      required: true
    }
  },
  methods: {
    onSetVolume(volume) {
      this.$emit('setVolume', volume)
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
