<template>
  <div class="music-controls-playback-details">
    <span class="title c-secondary">{{ title }}</span>
    <span class="artist c-secondary-variant">{{ artist }}</span>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsPlaybackDetails',
  props: {
    artist: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.music-controls-playback-details {
  display: flex;
  align-items: center;

  .title {
    font-size: 24px;
    font-weight: 700;
  }

  .artist {
    font-size: 16px;
    font-weight: 500;

    &:before {
      content: '•';
      margin: 0px 8px;
    }
  }
}
</style>
