<template>
  <TrackWrapper
    class="renderer-list-track color-text color-accent-hover"
    :height="50"
    :width="400"
    v-bind="data"
  >
    <template v-slot:default="props">
      <span>{{ props.title }}</span>
      <span>{{ props.subtitle }}</span>
    </template>

    <template v-slot:skeleton>
      <rect
        x="0"
        y="16"
        rx="3"
        ry="3"
        width="175"
        height="18"
      />
      <rect
        x="200"
        y="16"
        rx="3"
        ry="3"
        width="175"
        height="18"
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

  height: 50px;
  min-width: 0px;

  span {
    flex: 1;
    font-size: 14px;
    font-weight: 600;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
