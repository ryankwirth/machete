<template>
  <div class="renderer-showcase">
    <TrackLarge v-for="(item, i) in renderedItems" :key="i" :data="item"/>
  </div>
</template>

<script>
import TrackLarge from '@/components/tracks/TrackLarge.vue'

export default {
  name: 'RendererShowcase',
  components: {
      TrackLarge
  },
  props: {
    items: Array,
    skeletonItems: {
      type: Number,
      default: 3
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
.renderer-showcase {
  display: flex;

  width: 100%;
}
</style>
