<template>
  <div
    class="button"
    :style="{ padding: padding + 'px' }"
    @click="$emit('click')"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <BaseIcon
      :icon-name="iconName"
      :width="width"
      :height="height"
      :icon-color="iconColor"
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
    width: [Number, String],
    height: [Number, String],
    padding: [Number, String],
    iconColorDefault: String,
    iconColorHover: String
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    iconColor() {
      return this.hover ? this.iconColorHover : this.iconColorDefault
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
