<template>
  <aside class="top-bar color-background-variant-bg color-gutter-border">
    <Search />
  </aside>
</template>

<script>
import Search from './TopBarSearch.vue'

export default {
  name: 'TopBar',
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  position: relative;

  padding: 24px 32px;
  border-bottom: 1px solid;
}
</style>
