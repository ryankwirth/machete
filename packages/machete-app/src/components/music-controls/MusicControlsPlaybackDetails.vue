<template>
  <Marquee>
    <span class="title c-secondary">{{ title }}</span>
    <span class="artist c-secondary-variant">{{ artist }}</span>
  </Marquee>
</template>

<script>
import Marquee from '@/components/Marquee.vue'

export default {
  name: 'MusicControlsPlaybackDetails',
  components: {
    Marquee
  },
  props: {
    artist: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
span {
  white-space: nowrap;

  &.title {
    font-size: 24px;
    font-weight: 700;
  }

  &.artist {
    font-size: 16px;
    font-weight: 500;

    &:before {
      content: '•';
      margin: 0px 8px;
    }
  }
}
</style>
