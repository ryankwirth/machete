<template>
  <div class="home">
    <Renderer
      type="Showcase"
      v-bind="showcase"
    />
    <section>
      <Renderer
        class="most-popular"
        type="Grid"
        v-bind="mostPopular"
      />
      <Renderer
        class="recently-issued"
        type="List"
        v-bind="recentlyIssued"
      />
    </section>
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

<style lang="scss" scoped>
section {
  display: flex;

  .most-popular {
    flex: 1;
    margin-right: 48px;
  }

  .recently-issued {
    flex-basis: 500px;
  }
}
</style>