<template>
  <div
    class="track-medium"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <Artwork
      :artwork="data.artwork"
      :radius="3"
      :showHovering="isHovering"
      :showPlaying="isPlaying"
      :size="72"
    />
    <div class="details">
      <span class="title color-text">{{ data.title }}</span>
      <span class="artist color-navigation">{{ data.artist }}</span>
    </div>
  </div>
</template>

<script>
import Artwork from '@/components/artwork'

export default {
  name: 'TrackMedium',
  components: {
    Artwork
  },
  props: {
    data: Object
  },
  data() {
    return {
      isHovering: false,
      isPlaying: false
    }
  },
  mounted() {
    this.$coreService.on('metadata', this.onReceiveMetadata)
  },
  beforeDestroy() {
    this.$coreService.off('metadata', this.onReceiveMetadata)
  },
  methods: {
    onClick() {
      this.$coreService.play(this.data.id)
    },
    onMouseEnter() {
      this.isHovering = true
    },
    onMouseLeave() {
      this.isHovering = false
    },
    onReceiveMetadata({ id }) {
      this.isPlaying = this.data.id === id
    }
  }
}
</script>

<style lang="scss" scoped>
.track-medium {
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
        font-weight: 600;
        margin-bottom: 2px;
      }

      &.artist {
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
}
</style>
