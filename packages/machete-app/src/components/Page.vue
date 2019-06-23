<template>
  <section class="page">
    <Search/>
    <slot/>
  </section>
</template>

<script>
import Search from './search'

export default {
  name: 'Page',
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
}
</style>
