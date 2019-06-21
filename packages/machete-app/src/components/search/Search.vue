<template>
  <div class="search color-background-variant-bg color-gutter-border">
    <Input
      @search="onSearch"
    />
  </div>
</template>

<script>
import Input from './SearchInput.vue'

export default {
  name: 'Search',
  components: {
    Input
  },
  methods: {
    onSearch(query) {
      this.$coreService.search(query)
        .then((results) => console.log(results))
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  padding: 24px;
  border-bottom: 1px solid;
}
</style>
