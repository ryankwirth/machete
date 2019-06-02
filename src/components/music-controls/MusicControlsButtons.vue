<template>
  <div class="music-controls-buttons">
    <BaseIcon icon-name="previous" width="48" height="48" @click.native="onPreviousClicked">
      <IconPrevious/>
    </BaseIcon>
    <BaseIcon :icon-name="playPauseIconName" width="48" height="48" @click.native="onPlayPauseClicked">
      <IconPlay v-if="isPlaying"/>
      <IconPause v-else/>
    </BaseIcon>
    <BaseIcon icon-name="next" width="48" height="48" @click.native="onNextClicked">
      <IconNext/>
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'

export default {
  name: 'MusicControlsButtons',
  components: {
    BaseIcon,
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
  },
  computed: {
    playPauseIconName() {
      return this.isPlaying ? 'play' : 'pause'
    }
  }
}
</script>

<style scoped>
.music-controls-buttons {
  flex: 0 1 auto;
}

.music-controls-buttons > * {
  cursor: pointer;
}
</style>
