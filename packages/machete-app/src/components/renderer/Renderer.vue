<template>
  <div class="renderer">
    <div class="title color-header">{{ title }}</div>
    <component :is="type" :items="items"/>
  </div>
</template>

<script>
import Grid from './RendererGrid.vue'
import Showcase from './RendererShowcase.vue'

export default {
  name: 'Renderer',
  components: {
    Grid,
    Showcase
  },
  props: {
    title: {
      type: String,
      default: 'Loading...'
    },
    type: {
      type: String,
      default: 'Grid'
    },
    items: {
      type: Array,
      default: () => Array()
    }
  }
}
</script>

<style lang="scss" scoped>
.renderer .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}
</style>
