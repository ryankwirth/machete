<template>
  <Marquee>
    <span class="title c-secondary">{{ titleFormatted }}</span>
    <span class="bullet c-secondary-variant">{{ bulletFormatted }}</span>
    <span class="artist c-secondary-variant">{{ artistFormatted }}</span>
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

  &.title {
    font-size: 24px;
    font-weight: 700;
  }

  &.bullet {
    font-size: 16px;
    font-weight: 500;
    margin: 0px 8px;
  }

  &.artist {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
