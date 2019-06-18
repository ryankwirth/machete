<template>
  <div class="sidebar-section">
    <div class="name c-primary-variant">{{ name }}</div>
    <slot/>
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
  padding: 16px 0px;

  .name {
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 8px;
  }
}
</style>
