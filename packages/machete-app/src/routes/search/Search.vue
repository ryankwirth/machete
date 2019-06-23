<template>
  <div class="search">
    <div class="container">
      <div class="title color-header">Search</div>
      <span>{{ query }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      results: []
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
      this.$coreService.search(this.query)
        .then((results) => {
          console.log(results)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  flex: 1 0 auto;

  .container {
    padding: 32px 48px;

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
}
</style>
