<template>
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    role="presentation"
    preserveAspectRatio="xMaxYMax meet"
  >
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  fill: currentColor;
}
</style>
