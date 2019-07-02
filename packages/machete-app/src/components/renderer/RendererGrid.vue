<template>
  <div class="renderer-grid">
    <Track
      v-for="(item, i) in renderedItems"
      :key="i"
      :data="item"
      @click.native="$emit('play', i)"
    />
  </div>
</template>

<script>
import Track from './RendererGridTrack.vue'

export default {
  name: 'RendererGrid',
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
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-row-gap: 32px;
}
</style>
