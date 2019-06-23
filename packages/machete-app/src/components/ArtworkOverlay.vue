<template>
  <div class="artwork-overlay" :style="styles">
    <BaseIcon width="48" height="48">
      <slot/>
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'ArtworkPlay',
  components: {
    BaseIcon
  },
  props: {
    radius: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles() {
      return { borderRadius: `${this.radius}px` }
    }
  }
}
</script>

<style lang="scss" scoped>
.artwork-overlay {
  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFFFFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
