<template>
  <Section name="Your Playlists">
    <Button
      label="50 Favorite Songs"
      path="/playlist/50-favorite-songs"
    >
      <IconPlaylist />
    </Button>
    <Button
      label="Gym Music"
      path="/playlist/gym-music"
    >
      <IconPlaylist />
    </Button>
    <Button
      label="Friday Nights"
      path="/playlist/friday-nights"
    >
      <IconPlaylist />
    </Button>
  </Section>
</template>

<script>
import IconPlaylist from '@/components/icons/IconPlaylist.vue'

import Button from './SidebarSectionButton.vue'
import Section from './SidebarSection.vue'

export default {
  name: 'SidebarSectionPlaylists',
  components: {
    Button,
    IconPlaylist,
    Section
  }
}
</script>
