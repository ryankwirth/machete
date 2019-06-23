<template>
  <div class="search">
    <div class="title color-header">
      Search: "{{ query }}"
    </div>
    <Results
      :results="results"
    />
  </div>
</template>

<script>
import Results from './SearchResults.vue'

export default {
  name: 'Search',
  components: {
    Results
  },
  data() {
    return {
      results: null
    }
  },
  computed: {
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
    // When the user initially navigates to the /search route, fetch their
    // search results.
    this.fetchResults()
  },
  methods: {
    fetchResults() {
      // Reset the results state
      this.results = null

      // Query all services for search results
      this.$coreService.search(this.query)
        .then((results) => this.results = results)
    }
  }
}
</script>

<style lang="scss" scoped>
.search .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}
</style>
