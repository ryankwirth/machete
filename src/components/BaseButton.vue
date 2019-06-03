<template>
  <div
    class="button"
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
    width: [Number, String],
    height: [Number, String],
    padding: [Number, String]
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  cursor: pointer;
}
</style>
