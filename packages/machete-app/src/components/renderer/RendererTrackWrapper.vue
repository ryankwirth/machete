<template>
  <div
    class="renderer-track-wrapper"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <slot
      v-if="hasLoaded"
      :uri="uri"
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
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'RendererTrackWrapper',
  components: {
    ContentLoader
  },
  props: {
    uri: {
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
      default: 60
    },
    width: {
      type: Number,
      default: 256
    }
  },
  data() {
    return {
      isHovering: false
    }
  },
  computed: {
    isPlaying() {
      const { uri, playlistUri } = this.$coreData.metadata
      return this.uri === uri || this.uri === playlistUri
    },
    hasLoaded() {
      return !!this.uri
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
