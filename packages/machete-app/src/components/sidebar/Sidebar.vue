<template>
  <div class="sidebar">
    <Button label="Dashboard">
      <IconGlobe/>
    </Button>
    <Library/>
    <Playlists/>
    <Sources/>
  </div>
</template>

<script>
import IconGlobe from '@/components/icons/IconGlobe.vue'

import Button from './SidebarSectionButton.vue'
import Library from './SidebarSectionLibrary.vue'
import Playlists from './SidebarSectionPlaylists.vue'
import Sources from './SidebarSectionSources.vue'

export default {
  name: 'Sidebar',
  components: {
    Button,
    IconGlobe,
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
