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
  props: {
    isPlaying: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onNextClicked() {
      this.$emit('next')
    },
    onPlayPauseClicked() {
      if (this.isPlaying) {
        this.$emit('pause')
      } else {
        this.$emit('play')
      }
    },
    onPreviousClicked() {
      this.$emit('previous')
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
