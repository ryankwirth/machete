<template>
  <Section name="Your Playlists">
    <Button label="50 Favorite Songs">
      <IconPlaylist/>
    </Button>
    <Button label="Gym Music">
      <IconPlaylist/>
    </Button>
    <Button label="Friday Nights">
      <IconPlaylist/>
    </Button>
  </Section>
</template>

<script>
import Button from './SidebarSectionButton.vue'
import Section from './SidebarSection.vue'

import IconPlaylist from '@/components/icons/IconPlaylist.vue'

export default {
  name: 'SidebarSectionPlaylists',
  components: {
    Button,
    IconPlaylist,
    Section
  }
}
</script>
