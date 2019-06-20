<template>
  <section class="page">
    <Search/>
    <HomePage/>
  </section>
</template>

<script>
import HomePage from './home-page'
import Search from './search'

export default {
  name: 'Page',
  components: {
    HomePage,
    Search
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
}
</style>
