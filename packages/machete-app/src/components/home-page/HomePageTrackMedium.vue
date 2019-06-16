<template>
  <div class="home-page-track-medium" @click="onClick">
    <Artwork
      :artwork="artwork"
      :radius="2"
      :size="72"
    />
    <div class="details">
      <span class="title c-secondary-variant">{{ title }}</span>
      <span class="artist c-secondary-variant">{{ artist }}</span>
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
    id: String,
    title: String
  },
  methods: {
    onClick() {
      this.$coreService.play(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page-track-medium {
  display: flex;
  padding: 16px 0px;
  max-width: 100%;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0px 12px;
    text-align: left;
    min-width: 0px;

    .title {
      display: inline;
      font-weight: 700;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .artist {
      font-weight: 500;
    }
  }
}
</style>
