<template>
  <div class="home">
    <Renderer type="Showcase" v-bind="showcase"/>
    <Renderer type="Grid" title="Most Popular" v-bind="mostPopular"/>
  </div>
</template>

<script>
import { CoreService, QueryType } from 'machete-core'
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
    CoreService.get(QueryType.MOST_POPULAR)
      .then((items) => {
        this.mostPopular = { items }
      })
    
    CoreService.get(QueryType.SHOWCASE)
      .then((showcase) => {
        this.showcase = showcase[0]
      })
  }
}
</script>
