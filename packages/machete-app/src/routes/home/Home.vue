<template>
  <div class="home">
    <div class="title color-header">Most Popular</div>
    <div class="tracks">
      <Track
        v-for="result in results"
        :key="result.id"
        :artist="result.artist"
        :artwork="result.artwork"
        :id="result.id"
        :title="result.title"
      />
    </div>
  </div>
</template>

<script>
import Track from '@/components/tracks/TrackMedium.vue'

export default {
  name: 'Home',
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
.home {
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
</style>
