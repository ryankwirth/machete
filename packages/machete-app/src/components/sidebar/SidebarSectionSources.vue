<template>
  <Section name="Sources">
    <Button
      label="YouTube"
      path="/sources/youtube"
    >
      <IconYouTube />
    </Button>
  </Section>
</template>

<script>
import IconYouTube from '@/components/icons/IconYouTube.vue';

import Button from './SidebarSectionButton.vue';
import Section from './SidebarSection.vue';

export default {
  name: 'SidebarSectionSources',
  components: {
    Button,
    IconYouTube,
    Section,
  },
};
</script>
