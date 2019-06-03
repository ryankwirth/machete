<template>
  <div class="music-controls-scrubber">
    <div class="scrubber-track cb-background">
      <div class="scrubber-fill cb-primary"></div>
    </div>
    <div class="scrubber-handle"></div>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsScrubber'
}
</script>

<style scoped>
.music-controls-scrubber {
  position: relative;
  width: 100%;
}

.scrubber-track {
  overflow: hidden;

  width: 100%;
  height: 4px;

  border-radius: 2px;
}

.scrubber-fill {
  width: 75%;
  height: 100%;
}

.scrubber-handle {
  position: absolute;
  left: 75%;
  margin: -12px 0px 0px -8px;

  width: 16px;
  height: 16px;

  border-radius: 8px;
  box-shadow: 2px 2px 2px #000;
}

</style>
