<template>
  <TrackWrapper
    class="renderer-grid-track"
    v-bind="data"
  >
    <template v-slot:default="props">
      <Artwork
        :url="props.thumbnail"
        :radius="3"
        :show-hovering="props.isHovering"
        :show-playing="props.isPlaying"
        :size="60"
      />
      <div class="details">
        <span class="title color-text">{{ props.title }}</span>
        <span class="artist color-navigation">{{ props.subtitle }}</span>
      </div>
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
import Artwork from '@/components/artwork';
import TrackWrapper from './RendererTrackWrapper.vue';

export default {
  name: 'RendererGridTrack',
  components: {
    Artwork,
    TrackWrapper,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.renderer-grid-track {
  display: flex;
  height: 60px;

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
