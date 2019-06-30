<template>
  <div class="renderer">
    <div class="title color-header">
      {{ title }}
    </div>
    <component
      :is="type"
      :items="items"
    />
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
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.renderer {
  margin-bottom: 48px;

  .title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 24px;
    cursor: default;
  }
}
</style>
