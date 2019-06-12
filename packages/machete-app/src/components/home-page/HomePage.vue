<template>
  <div class="home-page">
    <Track
      v-for="result in results"
      :key="result.id"
      :artist="result.artist"
      :artwork="result.thumbnail"
      :title="result.title"
    />
  </div>
</template>

<script>
// import CoreService from '@/services/core'
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
    /*CoreService.init()
      .then(CoreService.getMostPopular)
      .then((results) => this.results = results) */
  }
}
</script>

<style lang="scss" scoped>
.home-page {

}
</style>
