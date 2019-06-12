<template>
  <div class="home-page-track-medium">
    <Artwork
      :artwork="artwork"
    />
    <div class="details">
      <div class="title">{{ title }}</div>
      <div class="artist">{{ artist }}</div>
    </div>
  </div>
</template>

<script>
import Artwork from '@/components/Artwork.vue'

export default {
  name: 'HomePageTrackMedium',
  components: {
    Artwork
  },
  props: {
    artist: String,
    artwork: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.home-page-track-medium {
  display: flex;

  .details {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    .title {
      font-weight: 700;
    }
  }
}
</style>
