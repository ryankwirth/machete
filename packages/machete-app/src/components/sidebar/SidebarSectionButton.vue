<template>
  <div :class="classes">
    <BaseIcon width="20" height="20">
      <slot/>
    </BaseIcon>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'SidebarSectionButton',
  components: {
    BaseIcon
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        'sidebar-section-button': true,
        'color-text': !this.active,
        'color-background': this.active,
        'color-background-hover': true,
        'color-accent-bg': this.active,
        'color-accent-bg-hover': true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-section-button {
  display: flex;
  align-items: center;

  padding: 16px;
  border-radius: 3px;
  cursor: pointer;

  .label {
    font-weight: 500;
    font-size: 14px;

    padding-left: 16px;
  }
}
</style>
