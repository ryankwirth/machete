<template>
  <Renderer
    type="Grid"
    v-bind="results"
  />
</template>

<script>
import { CoreService, QueryType } from 'machete-core'
import Renderer from '@/components/renderer'

export default {
  name: 'Search',
  components: {
    Renderer
  },
  data() {
    return {
      results: null
    }
  },
  computed: {
    title() {
      return `Search: "${this.query}"`
    },
    query() {
      return this.$route.query.q
    }
  },
  watch: {
    // If the user is on the /search route and searches again, we'll re-fetch
    // their search results.
    $route: 'fetchResults'
  },
  created() {
    this.fetchResults()
  },
  methods: {
    fetchResults() {
      // Reset the results state
      this.results = null

      // Query all services for search results
      CoreService.get(QueryType.SEARCH, { query: this.query })
        .then((results) => this.results = results[0])
    }
  }
}
</script>
