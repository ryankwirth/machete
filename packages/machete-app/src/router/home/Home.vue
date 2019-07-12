<template>
  <div class="home">
    <Renderer
      type="Showcase"
      v-bind="showcase"
    />
    <section>
      <Renderer
        class="recently-issued"
        type="Grid"
        :queue-on-play="true"
        v-bind="recentlyIssued"
      />
      <Renderer
        class="most-popular"
        type="List"
        :queue-on-play="true"
        v-bind="mostPopular"
      />
    </section>
  </div>
</template>

<script>
import {CoreService, QueryType} from 'machete-core';
import Renderer from '@/components/renderer';

export default {
  name: 'Home',
  components: {
    Renderer,
  },
  data() {
    return {
      showcase: null,
      recentlyIssued: null,
      mostPopular: null,
    };
  },
  mounted() {
    CoreService.get(QueryType.SHOWCASE)
        .then((results) => this.showcase = results[0]);

    CoreService.get(QueryType.RECENTLY_ISSUED)
        .then((results) => this.recentlyIssued = results[0]);

    CoreService.get(QueryType.MOST_POPULAR)
        .then((results) => this.mostPopular = results[0]);
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;

  .recently-issued {
    flex: 1;
    margin-right: 48px;
  }

  .most-popular {
    flex-basis: 400px;
  }
}
</style>
