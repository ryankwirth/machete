<template>
  <TrackWrapper
    v-bind="data"
    :height="72"
  >
    <template v-slot:default="props">
      <Artwork
        :url="props.thumbnail"
        :radius="3"
        :showHovering="props.isHovering"
        :showPlaying="props.isPlaying"
        :size="72"
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
