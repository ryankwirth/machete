<template>
  <div class="home">
    <div class="title color-header">Most Popular</div>
    <Grid v-slot="{ item }" :items="results">
      <Track :data="item"/>
    </Grid>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Track from '@/components/tracks/TrackMedium.vue'

export default {
  name: 'Home',
  components: {
    Grid,
    Track
  },
  data() {
    return {
      results: null
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
.home .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}
</style>
