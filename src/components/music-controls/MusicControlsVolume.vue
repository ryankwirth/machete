<template>
  <div class="music-controls-volume">
    <Button icon-name="volume">
      <IconVolumeUp/>
    </Button>
    <Scrubber
      :total="100"
      :value="50"
    />
  </div>
</template>

<script>
import Button from './MusicControlsButton.vue'
import IconVolumeUp from '@/components/icons/IconVolumeUp.vue'
import Scrubber from './MusicControlsScrubber.vue'

export default {
  name: 'MusicControlsVolume',
  components: {
    Button,
    IconVolumeUp,
    Scrubber
  }
}
</script>

<style scoped>
.music-controls-volume {
  flex: 1 1 auto;
}
</style>
