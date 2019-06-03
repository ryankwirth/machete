<template>
  <div class="music-controls-scrubber">
    <div class="track cb-primary-variant">
      <div class="fill cb-accent"></div>
    </div>
    <div class="handle">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicControlsScrubber'
}
</script>

<style lang="scss" scoped>
.music-controls-scrubber {
  position: relative;
  width: 100%;

  .track {
    overflow: hidden;
    width: 100%;
    height: 4px;
    border-radius: 2px;

    .fill {
      width: 75%;
      height: 100%;
    }
  }

  .handle {
    position: absolute;
    left: 75%;
    margin: -26px 0px 0px -24px;
    padding: 16px;
    cursor: pointer;

    .inner {
      width: 16px;
      height: 16px;
      background-color: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 1px 4px #545454;
    }

    &:hover .inner {
      box-shadow: 0px 1px 8px #121212;
    }
  }
}
</style>
