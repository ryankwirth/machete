<template>
  <div
    class="home-page-track-medium"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <Artwork
      :artwork="artwork"
      :radius="2"
      :showHovering="isHovering"
      :showPlaying="isPlaying"
      :size="72"
    />
    <div class="details">
      <span class="title c-secondary-variant">{{ title }}</span>
      <span class="artist c-secondary-variant">{{ artist }}</span>
    </div>
  </div>
</template>

<script>
import Artwork from '@/components/Artwork.vue'

export default {
  name: 'HomePageTrackMedium',
  components: {
    Artwork
  },
  props: {
    artist: String,
    artwork: String,
    id: String,
    title: String
  },
  data() {
    return {
      isHovering: false,
      isPlaying: false
    }
  },
  mounted() {
    this.$coreService.on('play', this.onReceivePlay)
  },
  beforeDestroy() {
    this.$coreService.off('play', this.onReceivePlay)
  },
  methods: {
    onClick() {
      this.$coreService.play(this.id)
    },
    onMouseEnter() {
      this.isHovering = true
    },
    onMouseLeave() {
      this.isHovering = false
    },
    onReceivePlay(id) {
      this.isPlaying = this.id === id
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page-track-medium {
  display: flex;
  padding: 16px 0px;
  max-width: 100%;
  cursor: pointer;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0px 12px;
    text-align: left;
    min-width: 0px;

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.title {
        font-weight: 700;
      }

      &.artist {
        font-weight: 500;
      }
    }
  }
}
</style>
