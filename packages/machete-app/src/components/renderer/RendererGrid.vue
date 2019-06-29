<template>
  <div class="renderer-grid">
    <TrackMedium v-for="(item, i) in renderedItems" :key="i" :data="item"/>
  </div>
</template>

<script>
import TrackMedium from '@/components/tracks/TrackMedium.vue'

export default {
  name: 'RendererGrid',
  components: {
      TrackMedium
  },
  props: {
    items: Array,
    skeletonItems: {
      type: Number,
      default: 20
    }
  },
  computed: {
    renderedItems() {
      return this.items || Array(this.skeletonItems).fill({})
    }
  }
}
</script>

<style lang="scss" scoped>
.renderer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
}
</style>
