<template>
  <div class="renderer-showcase">
    <Track
      v-for="(item, i) in renderedItems"
      :key="i"
      :data="item"
    />
  </div>
</template>

<script>
import Track from './RendererShowcaseTrack.vue'

export default {
  name: 'RendererShowcase',
  components: {
      Track
  },
  props: {
    items: {
      type: Array,
      default: null
    },
    skeletonItems: {
      type: Number,
      default: 6
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
