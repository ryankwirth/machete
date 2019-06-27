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
      :subtitle="subtitle"
      :thumbnail="thumbnail"
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
  name: 'TrackWrapper',
  components: {
    ContentLoader
  },
  props: {
    id: String,
    title: String,
    subtitle: String,
    thumbnail: String,
    height: Number
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
    },
    styles() {
      return {
        display: this.hasLoaded ? 'flex' : 'block',
        cursor: this.hasLoaded ? 'pointer' : 'default',
        height: `${this.height}px` || '',
      }
    }
  },
  methods: {
    onClick() {
      if (this.hasLoaded) {
        this.$coreService.play(this.id)
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
.track {
  padding: 16px 0px;
  max-width: 100%;

  > svg {
    height: 100%;
  }
}
</style>
