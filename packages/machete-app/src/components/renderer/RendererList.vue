<template>
  <div class="renderer-list">
    <div class="header color-navigation">
      <span>Title</span>
      <span>Artist</span>
    </div>

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
      default: 10
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

  .header {
    display: flex;
    margin-bottom: 8px;
    cursor: default;

    span {
      flex: 1;
      font-size: 12px;
      font-weight: 700;
    }
  }
}
</style>
