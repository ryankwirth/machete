<template>
  <Grid
    v-slot="{ item }"
    :items="results"
  >
    <Track :data="item"/>
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Track from '@/components/tracks/TrackMedium.vue'

export default {
  name: 'SearchResults',
  components: {
    Grid,
    Track
  },
  props: {
    results: Array
  }
}
</script>
