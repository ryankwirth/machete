<template>
  <div class="renderer-list">
    <div class="header">
      <span class="title color-navigation">Title</span>
      <span class="artist color-navigation">Artist</span>
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

  .header {
    display: flex;
    cursor: default;

    span {
      font-size: 12px;
      font-weight: 700;

      height: 100%;

      &.title {
        flex: 3;
      }

      &.artist {
        flex: 4;
      }
    }
  }
}
</style>
