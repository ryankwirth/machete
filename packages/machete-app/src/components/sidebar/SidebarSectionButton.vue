<template>
  <div class="sidebar-section-button">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'SidebarSectionButton',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-basis: 288px;
}
</style>
