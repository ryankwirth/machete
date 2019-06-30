<template>
  <div class="sidebar-section">
    <div class="name color-navigation">
      {{ name }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SidebarSection',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-section {
  padding-top: 32px;

  .name {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
}
</style>
