<template>
  <div class="home-page">
    <div class="container">
      <div class="title color-header">Most Popular</div>
      <div class="tracks">
        <Track
          v-for="result in results"
          :key="result.id"
          :artist="result.artist"
          :artwork="result.thumbnail"
          :id="result.id"
          :title="result.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Track from './HomeTrackMedium.vue'

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
  flex: 1 0 auto;

  .container {
    padding: 32px 48px;

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .tracks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
}
</style>
