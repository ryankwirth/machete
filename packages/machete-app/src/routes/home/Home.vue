<template>
  <div class="home">
    <Renderer
      type="Showcase"
      v-bind="showcase"
    />
    <Renderer
      type="Grid"
      v-bind="mostPopular"
    />
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
      .then((results) => this.mostPopular = results[0])
    
    CoreService.get(QueryType.SHOWCASE)
      .then((results) => this.showcase = results[0])
  }
}
</script>
