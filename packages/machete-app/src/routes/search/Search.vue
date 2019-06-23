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
  computed: {
    query() {
      return this.$route.query.q
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
