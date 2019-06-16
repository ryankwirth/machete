<template>
  <div class="sidebar-section">
    <div class="name c-primary-variant">{{ name }}</div>
    <slot/>
  </div>
</template>

<script>
import Button from './SidebarSectionButton.vue'

export default {
  name: 'SidebarSection',
  components: {
    Button
  },
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
  padding: 8px 0px;

  .name {
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 8px;
  }
}
</style>
