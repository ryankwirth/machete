<template>
  <div class="search-input color-background-bg color-gutter-border color-accent-border-focus">
    <input
      v-model="query"
      class="color-text"
      type="text"
      placeholder="Type to search..."
      @keyup.enter="onSubmit"
    />
    <Button
      class="button"
      width="32"
      height="32"
      padding="8"
      @click="onSubmit"
    >
      <IconSearch/>
    </Button>
  </div>
</template>

<script>
import Button from '@/components/BaseButton.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  name: 'SearchInput',
  components: {
    Button,
    IconSearch
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search', this.query)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.search-input {
  display: flex;
  border: 1px solid;
  border-radius: 3px;

  transition: border 0.25s;

  input {
    flex-grow: 1;

    background: none;
    border: none;
    caret-color: $accent-light;
    font-size: 16px;
    padding: 12px;

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    border-color: $accent-light;
  }
}
</style>
