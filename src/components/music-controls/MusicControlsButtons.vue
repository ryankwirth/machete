<template>
  <div class="music-controls-buttons">
    <Button icon-name="previous" @click="onPreviousClicked">
      <IconPrevious/>
    </Button>
    <Button :icon-name="playPauseIconName" @click="onPlayPauseClicked">
      <IconPlay v-if="isPlaying"/>
      <IconPause v-else/>
    </Button>
    <Button icon-name="next" @click="onNextClicked">
      <IconNext/>
    </Button>
  </div>
</template>

<script>
import Button from './MusicControlsButtonsItem.vue'
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
  computed: {
    playPauseIconName() {
      return this.isPlaying ? 'play' : 'pause'
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
  flex: 0 1 auto;
}
</style>
