<template>
  <div class="music-controls-buttons">
    <BaseButton
      icon-name="previous"
      width="48"
      height="48"
      icon-color-default="#FF6600"
      icon-color-hover="#000000"
      @click="onPreviousClicked"
    >
      <IconPrevious/>
    </BaseButton>

    <BaseButton
      :icon-name="playPauseIconName"
      width="48"
      height="48"
      icon-color-default="#FF6600"
      icon-color-hover="#000000"
      @click="onPlayPauseClicked"
    >
      <IconPlay v-if="isPlaying"/>
      <IconPause v-else/>
    </BaseButton>

    <BaseButton
      icon-name="next"
      width="48"
      height="48"
      icon-color-default="#FF6600"
      icon-color-hover="#000000"
      @click="onNextClicked"
    >
      <IconNext/>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'

export default {
  name: 'MusicControlsButtons',
  components: {
    BaseButton,
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
