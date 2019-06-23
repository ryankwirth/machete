<template>
  <div
    class="track"
    :style="styles"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot
      v-if="hasLoaded"
      :id="id"
      :title="title"
      :artist="artist"
      :artwork="artwork"
      :length="length"
      :isHovering="isHovering"
      :isPlaying="isPlaying"
    />
    <ContentLoader
      v-else
      class="color-gutter"
      primaryColor="currentColor"
      secondaryColor="currentColor"
      preserveAspectRatio="xMinYMin"
      :animate="false"
      :height="height"
    >
      <slot name="skeleton"/>
    </ContentLoader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'Track',
  components: {
    ContentLoader
  },
  props: {
    id: String,
    title: String,
    artist: String,
    artwork: String,
    length: String,
    height: Number
  },
  computed: {
    hasLoaded() {
      return !!this.id
    },
    styles() {
      return {
        display: this.hasLoaded ? 'flex' : 'block',
        cursor: this.hasLoaded ? 'pointer' : 'default',
        height: `${this.height}px` || '',
      }
    }
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
      this.$coreService.play(this.id)
    },
    onMouseEnter() {
      this.isHovering = true
    },
    onMouseLeave() {
      this.isHovering = false
    },
    onReceiveMetadata({ id }) {
      this.isPlaying = this.id === id
    }
  }
}
</script>

<style lang="scss" scoped>
.track {
  padding: 16px 0px;
  max-width: 100%;

  > svg {
    height: 100%;
  }
}
</style>
