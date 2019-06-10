<template>
  <div
    class="button c-secondary-variant c-accent-hover"
    :style="{ padding: padding + 'px' }"
    @click="$emit('click')"
  >
    <BaseIcon
      :icon-name="iconName"
      :width="width"
      :height="height"
    >
      <slot/>
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },
  props: {
    iconName: String,
    width: {
      type: [Number, String],
      default: 48
    },
    height: {
      type: [Number, String],
      default: 48
    },
    padding: {
      type: [Number, String],
      default: 16
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  cursor: pointer;
}
</style>
