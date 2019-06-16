<template>
  <div class="sidebar">
    <Library/>
    <Playlists/>
  </div>
</template>

<script>
import Library from './SidebarSectionLibrary.vue'
import Playlists from './SidebarSectionPlaylists.vue'

export default {
  name: 'Sidebar',
  components: {
    Library,
    Playlists
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-basis: 288px;
  padding: 24px;
}
</style>
