<template>
  <TrackWrapper
    class="renderer-list-track color-text color-accent-hover"
    v-bind="data"
  >
    <template v-slot:default="props">
      <span class="title">{{ props.title }}</span>
      <span class="artist">{{ props.subtitle }}</span>
    </template>

    <template v-slot:skeleton>
      <rect
        x="0"
        y="0"
        rx="3"
        ry="3"
        width="60"
        height="60"
      />
      <rect
        x="70"
        y="12"
        rx="3"
        ry="3"
        width="168"
        height="18"
      />
      <rect
        x="70"
        y="34"
        rx="3"
        ry="3"
        width="96"
        height="15"
      />
    </template>
  </TrackWrapper>
</template>

<script>
import Artwork from '@/components/artwork'
import TrackWrapper from './RendererTrackWrapper.vue'

export default {
  name: 'RendererListTrack',
  components: {
    Artwork,
    TrackWrapper
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.renderer-list-track {
  display: flex;
  align-items: center;

  height: 60px;
  min-width: 0px;

  span {
    font-size: 14px;
    font-weight: 600;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.title {
      flex: 3;
    }

    &.artist {
      flex: 4;
    }
  }
}
</style>
