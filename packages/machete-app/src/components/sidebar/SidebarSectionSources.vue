<template>
  <Section name="Sources">
    <Button label="YouTube">
      <IconYouTube/>
    </Button>
  </Section>
</template>

<script>
import Button from './SidebarSectionButton.vue'
import Section from './SidebarSection.vue'

import IconYouTube from '@/components/icons/IconYouTube.vue'

export default {
  name: 'SidebarSectionSources',
  components: {
    Button,
    IconYouTube,
    Section
  }
}
</script>
