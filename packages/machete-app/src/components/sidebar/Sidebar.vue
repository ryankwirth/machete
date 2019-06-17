<template>
  <div class="sidebar">
    <Library/>
    <Playlists/>
    <Sources/>
  </div>
</template>

<script>
import Library from './SidebarSectionLibrary.vue'
import Playlists from './SidebarSectionPlaylists.vue'
import Sources from './SidebarSectionSources.vue'

export default {
  name: 'Sidebar',
  components: {
    Library,
    Playlists,
    Sources
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-basis: 288px;
  padding: 24px;
}
</style>
