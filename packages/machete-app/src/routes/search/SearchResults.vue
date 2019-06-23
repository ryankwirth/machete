<template>
  <div class="search-results">
    <Track
      v-for="result in results"
      :key="result.id"
      :data="result"
    />
  </div>
</template>

<script>
import Track from '@/components/tracks/TrackMedium.vue'

export default {
  name: 'Search',
  components: {
    Track
  },
  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
}
</style>
