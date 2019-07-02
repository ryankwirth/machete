<template>
  <div class="renderer-list">
    <Track
      v-for="(item, i) in renderedItems"
      :key="i"
      :data="item"
      @click.native="$emit('play', i)"
    />
  </div>
</template>

<script>
import Track from './RendererListTrack.vue'

export default {
  name: 'RendererList',
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
      default: 30
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
.renderer-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-row-gap: 32px;
}
</style>
