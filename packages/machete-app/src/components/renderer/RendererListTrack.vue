<template>
  <TrackWrapper
    class="renderer-list-track color-text color-accent-hover"
    :height="50"
    :width="400"
    v-bind="data"
  >
    <template v-slot:default="props">
      <BaseIcon
        v-if="props.isPlaying"
        class="icon color-accent"
        width="16"
        height="16"
      >
        <IconPlaying />
      </BaseIcon>
      <span :class="{ 'color-accent': props.isPlaying }">{{ props.title }}</span>
      <span :class="{ 'color-accent': props.isPlaying }">{{ props.subtitle }}</span>
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
import BaseIcon from '@/components/BaseIcon.vue'
import IconPlaying from '@/components/icons/IconPlaying.vue'
import TrackWrapper from './RendererTrackWrapper.vue'

export default {
  name: 'RendererListTrack',
  components: {
    BaseIcon,
    IconPlaying,
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
  position: relative;

  height: 50px;
  min-width: 0px;

  .icon {
    position: absolute;
    top: 50%;
    left: -24px;
    transform: translateY(-50%);
  }

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
