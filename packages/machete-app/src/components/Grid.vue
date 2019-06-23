<template>
  <div class="grid">
    <slot v-for="item in renderedItems" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    items: Array,
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
}
</style>
