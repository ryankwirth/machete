<template>
  <div
    class="renderer-track-wrapper"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot
      v-if="hasLoaded"
      :id="id"
      :title="title"
      :subtitle="subtitle"
      :thumbnail="thumbnail"
      :isHovering="isHovering"
      :isPlaying="isPlaying"
    />
    <ContentLoader
      v-else
      class="color-gutter"
      primary-color="currentColor"
      secondary-color="currentColor"
      preserve-aspect-ratio="xMinYMin"
      :animate="false"
      :height="height"
      :width="width"
    >
      <slot name="skeleton" />
    </ContentLoader>
  </div>
</template>

<script>
import { CoreService } from 'machete-core'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'RendererTrackWrapper',
  components: {
    ContentLoader
  },
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    thumbnail: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: 72
    },
    width: {
      type: Number,
      default: 360
    }
  },
  data() {
    return {
      isHovering: false
    }
  },
  computed: {
    isPlaying() {
      return this.id === this.$coreData.metadata.id
    },
    hasLoaded() {
      return !!this.id
    }
  },
  methods: {
    onClick() {
      if (this.hasLoaded) {
        CoreService.play(this.id)
      }
    },
    onMouseEnter() {
      this.isHovering = true
    },
    onMouseLeave() {
      this.isHovering = false
    }
  }
}
</script>

<style lang="scss" scoped>
.renderer-track-wrapper {
  cursor: pointer;
  max-width: 100%;

  > svg {
    height: 100%;
  }
}
</style>
