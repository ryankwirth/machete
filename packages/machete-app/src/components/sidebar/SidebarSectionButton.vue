<template>
  <div class="sidebar-section-button c-secondary-variant c-primary-hover cbackground-accent-hover">
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
    label: {
      type: String,
      required: true
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
    font-weight: 700;
    font-size: 14px;

    padding-left: 16px;
  }
}
</style>
