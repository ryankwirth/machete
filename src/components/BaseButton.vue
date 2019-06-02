<template>
  <BaseIcon
    :icon-name="iconName"
    :width="width"
    :height="height"
    :icon-color="iconColor"
    @click.native="onClick"
    @mouseover.native="hover = true"
    @mouseleave.native="hover = false"
  >
    <slot/>
  </BaseIcon>
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
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
* {
  cursor: pointer;
}
</style>
