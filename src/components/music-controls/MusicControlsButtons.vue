<template>
  <div class="music-controls-buttons">
    <BaseIcon icon-name="play">
      <IconPlay />
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import IconPlay from '@/components/icons/IconPlay.vue'

export default {
  name: 'MusicControlsButtons',
  components: {
    BaseIcon,
    IconPlay
  }
}
</script>

<style scoped>
.buttons {
  flex: 0 1 auto;
}
</style>
