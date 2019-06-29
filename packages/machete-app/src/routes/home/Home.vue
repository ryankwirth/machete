<template>
  <div class="home">
    <Renderer v-bind="showcase"/>
    <Renderer v-bind="mostPopular"/>
  </div>
</template>

<script>
import Renderer from '@/components/renderer'

export default {
  name: 'Home',
  components: {
    Renderer
  },
  data() {
    return {
      mostPopular: null,
      showcase: null
    }
  },
  mounted() {
    this.$coreService.getMostPopular()
      .then((items) => {
        this.mostPopular = { title: 'Most Popular', type: 'Grid', items }
      })
    
    this.$coreService.getShowcase()
      .then((showcase) => {
        this.showcase = { type: 'Showcase', ...showcase[0] }
      })
  }
}
</script>
