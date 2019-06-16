<template>
  <div class="sidebar">
    <Section
      name="Your Library"
    />
  </div>
</template>

<script>
import Section from './SidebarSection.vue'

export default {
  name: 'Sidebar',
  components: {
    Section
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-basis: 288px;
  padding: 24px;
}
</style>
