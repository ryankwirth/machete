<template>
  <div class="sidebar-section">
    <div class="name c-secondary-variant">{{ name }}</div>
    <Button label="Recently Played"/>
    <Button label="Songs"/>
    <Button label="Albums"/>
    <Button label="Artists"/>
    <Button label="Liked"/>
    <Button label="Local Files"/>
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
  .name {
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
