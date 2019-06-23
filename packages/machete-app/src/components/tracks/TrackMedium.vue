<template>
  <TrackWrapper v-bind="data">
    <template v-slot:default="props">
      <Artwork
        :artwork="props.artwork"
        :radius="3"
        :showHovering="props.isHovering"
        :showPlaying="props.isPlaying"
        :size="72"
      />
      <div class="details">
        <span class="title color-text">{{ props.title }}</span>
        <span class="artist color-navigation">{{ props.artist }}</span>
      </div>
    </template>

    <template v-slot:skeleton>
      <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
      <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
      <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
    </template>
  </TrackWrapper>
</template>

<script>
import Artwork from '@/components/artwork'
import TrackWrapper from './TrackWrapper.vue'

export default {
  name: 'TrackMedium',
  components: {
    Artwork,
    TrackWrapper
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
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
</style>
