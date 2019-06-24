<template>
  <div
    class="top-bar-navigation-button color-background-bg color-gutter-border"
    @click="onClick"
  >
    <BaseIcon>
      <slot/>
    </BaseIcon>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'TopBarNavigationButton',
  components: {
    BaseIcon
  },
  props: {
    enable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar-navigation-button {
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-radius: 3px;
  padding: 0px 14px;
  cursor: pointer;
}
</style>
