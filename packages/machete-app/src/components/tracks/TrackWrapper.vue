<template>
  <div
    :class="classes"
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
    <ContentLoader v-else>
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
    length: String
  },
  computed: {
    classes() {
      return {
        track: this.hasLoaded
      }
    },
    hasLoaded() {
      return !!this.id
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
  display: flex;
  padding: 16px 0px;
  max-width: 100%;
  cursor: pointer;
}
</style>
