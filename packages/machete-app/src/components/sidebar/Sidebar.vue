<template>
  <section class="sidebar color-background-variant-bg color-gutter-border">
    <Button label="Recommendations" path="/">
      <IconGlobe/>
    </Button>
    <Library/>
    <Playlists/>
    <Sources/>
  </section>
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
  flex-basis: 292px;
  padding: 24px;
  border-right: 1px solid;
}
</style>
