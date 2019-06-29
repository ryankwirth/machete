<template>
  <div class="home">
    <div class="title color-header">Lorem Ipsum</div>
    <Grid v-slot="{ item }" :items="showcase">
      <TrackLarge :data="item"/>
    </Grid>
    <div class="title color-header">Most Popular</div>
    <Grid v-slot="{ item }" :items="results">
      <TrackMedium :data="item"/>
    </Grid>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'
import TrackLarge from '@/components/tracks/TrackLarge.vue'
import TrackMedium from '@/components/tracks/TrackMedium.vue'

export default {
  name: 'Home',
  components: {
    Grid,
    TrackLarge,
    TrackMedium
  },
  data() {
    return {
      results: null,
      showcase: null
    }
  },
  mounted() {
    this.$coreService.getMostPopular()
      .then((results) => {
        this.results = results
      })
    
    this.$coreService.getShowcase()
      .then((showcase) => {
        this.showcase = showcase[0].contents
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
