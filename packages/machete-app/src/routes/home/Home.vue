<template>
  <div class="home">
    <Renderer type="Showcase" v-bind="showcase"/>
    <Renderer type="Grid" title="Most Popular" v-bind="mostPopular"/>
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
        this.mostPopular = { items }
      })
    
    this.$coreService.getShowcase()
      .then((showcase) => {
        this.showcase = showcase[0]
      })
  }
}
</script>
