<template>
  <TrackWrapper
    class="renderer-showcase-track"
    v-bind="data"
  >
    <template v-slot:default="props">
      <Artwork
        :url="props.thumbnail"
        :radius="3"
        :showHovering="props.isHovering"
        :showPlaying="props.isPlaying"
        :size="225"
      />
      <div class="details">
        <span class="title color-text">{{ props.title }}</span>
        <span class="artist color-navigation">{{ props.subtitle }}</span>
      </div>
    </template>

    <template v-slot:skeleton>
      <rect x="82" y="16" rx="3" ry="3" width="256" height="19" /> 
      <rect x="82" y="40" rx="3" ry="3" width="96" height="15" /> 
      <rect x="0" y="0" rx="3" ry="3" width="72" height="72" />
    </template>
  </TrackWrapper>
</template>

<script>
import Artwork from '@/components/artwork'
import TrackWrapper from './RendererTrackWrapper.vue'

export default {
  name: 'RendererShowcaseTrack',
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
.renderer-showcase-track {
  display: flex;
  flex-direction: column;

  height: 280px;
  padding-right: 48px;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 16px;

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.title {
        font-weight: 600;
        margin-bottom: 4px;
      }

      &.artist {
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
}
</style>
