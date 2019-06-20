<template>
  <Marquee>
    <span class="title color-header">{{ titleFormatted }}</span>
    <span class="bullet color-navigation">{{ bulletFormatted }}</span>
    <span class="artist color-navigation">{{ artistFormatted }}</span>
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
  },
  computed: {
    artistFormatted() {
      return this.isLoading ? '' : this.artist
    },
    bulletFormatted() {
      return this.isLoading ? '' : '•'
    },
    titleFormatted() {
      return this.isLoading ? 'Loading...' : this.title
    },
    isLoading() {
      return this.artist === ''
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  white-space: nowrap;
  font-weight: 500;

  &.title {
    font-size: 24px;
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
