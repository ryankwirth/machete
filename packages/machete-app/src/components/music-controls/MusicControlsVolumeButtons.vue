<template>
  <div class="music-controls-volume-buttons">
    <Button
      width="36"
      height="36"
      padding="8"
      @click="onRepeatClicked"
    >
      <IconRepeat/>
    </Button>
    <Button
      width="36"
      height="36"
      padding="8"
      @click="onVolumeClicked"
    >
      <IconVolumeOff v-if="volume === 0"/>
      <IconVolumeDown v-else-if="volume < 50"/>
      <IconVolumeUp v-else/>
    </Button>
  </div>
</template>

<script>
import Button from '@/components/BaseButton.vue'
import IconRepeat from '@/components/icons/IconRepeat.vue'
import IconVolumeDown from '@/components/icons/IconVolumeDown.vue'
import IconVolumeOff from '@/components/icons/IconVolumeOff.vue'
import IconVolumeUp from '@/components/icons/IconVolumeUp.vue'

export default {
  name: 'MusicControlsVolumeButtons',
  components: {
    Button,
    IconRepeat,
    IconVolumeDown,
    IconVolumeOff,
    IconVolumeUp
  },
  props: {
    volume: Number
  },
  data() {
    return {
      mutedVolume: 50
    }
  },
  computed: {
    muted() {
      return this.volume === 0
    }
  },
  methods: {
    onRepeatClicked() {

    },
    onVolumeClicked() {
      if (this.muted) {
        this.$emit('setVolume', this.mutedVolume)
      } else {
        this.mutedVolume = this.volume
        this.$emit('setVolume', 0)
      }
    }
  }
}
</script>

<style scoped>
.music-controls-volume-buttons {
  display: flex;
  margin-right: 16px;
}
</style>
