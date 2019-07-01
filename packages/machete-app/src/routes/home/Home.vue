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
    <Renderer
      type="Grid"
      v-bind="recentlyIssued"
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
      showcase: null,
      mostPopular: null,
      recentlyIssued: null
    }
  },
  mounted() {
    CoreService.get(QueryType.SHOWCASE)
      .then((results) => this.showcase = results[0])

    CoreService.get(QueryType.MOST_POPULAR)
      .then((results) => this.mostPopular = results[0])

    CoreService.get(QueryType.RECENTLY_ISSUED)
      .then((results) => this.recentlyIssued = results[0])
  }
}
</script>
