<template>
  <div class="music-controls-buttons">
    <BaseIcon icon-name="previous">
      <IconPrevious/>
    </BaseIcon>
    <BaseIcon icon-name="play">
      <IconPlay/>
    </BaseIcon>
    <BaseIcon icon-name="next">
      <IconNext/>
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'

export default {
  name: 'MusicControlsButtons',
  components: {
    BaseIcon,
    IconNext,
    IconPlay,
    IconPrevious
  }
}
</script>

<style scoped>
.buttons {
  flex: 0 1 auto;
}
</style>
