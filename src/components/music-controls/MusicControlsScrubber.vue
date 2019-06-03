<template>
  <div class="music-controls-scrubber">
    <div class="scrubber-track cb-primary-variant">
      <div class="scrubber-track__fill cb-accent"></div>
    </div>
    <div class="scrubber-handle">
      <div class="scrubber-handle__inner"></div>
    </div>
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

.scrubber-track__fill {
  width: 75%;
  height: 100%;
}

.scrubber-handle {
  position: absolute;
  left: 75%;

  margin: -26px 0px 0px -24px;
  padding: 16px;

  cursor: pointer;
}

.scrubber-handle__inner {
  width: 16px;
  height: 16px;
  
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 1px 4px #545454;
}

</style>
