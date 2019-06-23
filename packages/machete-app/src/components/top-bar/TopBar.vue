<template>
  <div class="top-bar color-background-variant-bg color-gutter-border">
    <Navigation/>
    <Search/>
  </div>
</template>

<script>
import Navigation from './TopBarNavigation.vue'
import Search from './TopBarSearch.vue'

export default {
  name: 'TopBar',
  components: {
    Navigation,
    Search
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  position: relative;

  padding: 24px;
  border-bottom: 1px solid;
}
</style>
