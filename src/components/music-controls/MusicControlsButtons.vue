<template>
  <div class="music-controls-buttons">
    <ButtonIcon
      icon-name="previous"
      width="48"
      height="48"
      icon-color-default="#FF6600"
      icon-color-hover="#000000"
      @click="onPreviousClicked"
    >
      <IconPrevious/>
    </ButtonIcon>

    <ButtonIcon
      :icon-name="playPauseIconName"
      width="48"
      height="48"
      icon-color-default="#FF6600"
      icon-color-hover="#000000"
      @click="onPlayPauseClicked"
    >
      <IconPlay v-if="isPlaying"/>
      <IconPause v-else/>
    </ButtonIcon>

    <ButtonIcon
      icon-name="next"
      width="48"
      height="48"
      icon-color-default="#FF6600"
      icon-color-hover="#000000"
      @click="onNextClicked"
    >
      <IconNext/>
    </ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'

export default {
  name: 'MusicControlsButtons',
  components: {
    ButtonIcon,
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
