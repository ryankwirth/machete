<template>
  <div class="music-controls-buttons">
    <Button @click="onPreviousClicked">
      <IconPrevious/>
    </Button>
    <Button @click="onPlayPauseClicked">
      <IconPause v-if="isPlaying"/>
      <IconPlay v-else/>
    </Button>
    <Button @click="onNextClicked">
      <IconNext/>
    </Button>
  </div>
</template>

<script>
import Button from '@/components/BaseButton.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'

export default {
  name: 'MusicControlsButtons',
  components: {
    Button,
    IconNext,
    IconPause,
    IconPlay,
    IconPrevious
  },
  computed: {
    isPlaying() {
      return this.$coreData.status.isPlaying || false
    }
  },
  methods: {
    onNextClicked() {
      // Handle next...
    },
    onPlayPauseClicked() {
      if (this.isPlaying) {
        this.$coreService.pause()
      } else {
        this.$coreService.play()
      }
    },
    onPreviousClicked() {
      // If we're more than 5 seconds into the song, go back to the beginning
      if (this.$coreData.timestamp > 5) {
        this.$coreService.seekTo(0)
      }
    }
  }
}
</script>

<style scoped>
.music-controls-buttons {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}
</style>
