<template>
  <input
    class="search-input color-gutter-border color-accent-border-focus"
    type="text"
    placeholder="Type to search..."
  />
</template>

<script>
export default {
  name: 'SearchInput'
}
</script>

<style lang="scss" scoped>
.search-input {
  font-size: 16px;

  padding: 12px;
  border: 1px solid;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
}
</style>
