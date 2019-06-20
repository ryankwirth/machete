<template>
  <input
    class="search-input color-text color-background-bg color-gutter-border color-accent-border-focus"
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
@import '../../assets/styles/variables.scss';

.search-input {
  caret-color: $accent-light;
  font-size: 16px;

  padding: 12px;
  border: 1px solid;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
}
</style>
