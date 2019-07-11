<template>
  <Section name="Your Library">
    <Button
      label="Recently Played"
      path="/recently-played"
    >
      <IconClock />
    </Button>
    <Button
      label="Songs"
      path="/songs"
    >
      <IconMusic />
    </Button>
    <Button
      label="Albums"
      path="/albums"
    >
      <IconAlbum />
    </Button>
    <Button
      label="Artists"
      path="/artists"
    >
      <IconPerson />
    </Button>
    <Button
      label="Liked"
      path="/liked"
    >
      <IconFavourite />
    </Button>
    <Button
      label="Local Files"
      path="/local-files"
    >
      <IconFolder />
    </Button>
  </Section>
</template>

<script>
import IconAlbum from '@/components/icons/IconAlbum.vue'
import IconClock from '@/components/icons/IconClock.vue'
import IconFavourite from '@/components/icons/IconFavouriteOutline.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconMusic from '@/components/icons/IconMusic.vue'
import IconPerson from '@/components/icons/IconPerson.vue'

import Button from './SidebarSectionButton.vue'
import Section from './SidebarSection.vue'

export default {
  name: 'SidebarSectionLibrary',
  components: {
    Button,
    IconAlbum,
    IconClock,
    IconFavourite,
    IconFolder,
    IconMusic,
    IconPerson,
    Section
  }
}
</script>
