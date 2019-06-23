<template>
  <section class="page">
    <Search/>
    <div class="content">
      <slot/>
    </div>
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

  .content {
    flex: 1 0 auto;

    > div {
      padding: 32px 48px;
    }
  }
}
</style>
