<template>
  <div class="sidebar">
    <Library/>
  </div>
</template>

<script>
import Library from './SidebarSectionLibrary.vue'

export default {
  name: 'Sidebar',
  components: {
    Library
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-basis: 288px;
  padding: 24px;
}
</style>
