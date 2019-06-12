<template>
  <div class="artwork-play c-primary">
    <BaseIcon icon-name="play">
      <IconPlay/>
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import IconPlay from './icons/IconPlay.vue'

export default {
  name: 'ArtworkPlay',
  components: {
    BaseIcon,
    IconPlay
  }
}
</script>

<style lang="scss" scoped>
.artwork-play {
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.25);
}
</style>
