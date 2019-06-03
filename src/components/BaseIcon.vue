<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName" 
    role="presentation"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g>
      <slot/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
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
  margin-bottom: -4px;
  fill: currentColor;
}
</style>
