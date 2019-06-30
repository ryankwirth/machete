<template>
  <Marquee>
    <span class="title color-header">{{ title }}</span>
    <span class="bullet color-navigation">{{ bullet }}</span>
    <span class="artist color-navigation">{{ artist }}</span>
  </Marquee>
</template>

<script>
import Marquee from '@/components/Marquee.vue'

export default {
  name: 'MusicControlsPlaybackDetails',
  components: {
    Marquee
  },
  computed: {
    artist() {
      return this.$coreData.metadata.artist || ''
    },
    bullet() {
      return this.$coreData.metadata.title ? '•' : ''
    },
    title() {
      return this.$coreData.metadata.title || 'Loading...'
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  white-space: nowrap;
  font-weight: 500;

  &.title {
    font-size: 22px;
  }

  &.bullet {
    font-size: 16px;
    margin: 0px 8px;
  }

  &.artist {
    font-size: 16px;
  }
}
</style>
