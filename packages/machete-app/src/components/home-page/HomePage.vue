<template>
  <div class="home-page">
    <Track
      v-for="result in results"
      :key="result.id"
      :artist="result.artist"
      :artwork="result.thumbnail"
      :id="result.id"
      :title="result.title"
    />
  </div>
</template>

<script>
import Track from './HomePageTrackMedium.vue'

export default {
  name: 'HomePage',
  components: {
    Track
  },
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.$coreService.getMostPopular()
      .then((results) => {
        this.results = results
      })
  }
}
</script>

<style lang="scss" scoped>
.home-page {

}
</style>
