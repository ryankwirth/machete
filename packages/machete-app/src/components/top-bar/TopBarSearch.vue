<template>
  <div
    class="top-bar-search
           color-background-bg
           color-gutter-border
           color-accent-border-focus"
  >
    <input
      v-model="query"
      class="color-text"
      type="text"
      placeholder="Type to search..."
      @focus="$event.target.select()"
      @keyup.enter="onSubmit"
    >
    <Button
      class="button"
      width="24"
      height="24"
      padding="8"
      @click="onSubmit"
    >
      <IconSearch />
    </Button>
  </div>
</template>

<script>
import Button from '@/components/BaseButton.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

export default {
  name: 'Search',
  components: {
    Button,
    IconSearch,
  },
  data() {
    return {
      query: this.$route.query.q || '',
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({path: `/search?q=${this.query}`});
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.top-bar-search {
  display: flex;
  flex: 1 0 auto;
  border: 1px solid;
  border-radius: 3px;

  transition: border 0.25s;

  input {
    flex-grow: 1;

    background: none;
    border: none;
    caret-color: $accent-light;
    font-size: 14px;
    padding: 8px 16px;

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    border-color: $accent-light;
  }
}
</style>
