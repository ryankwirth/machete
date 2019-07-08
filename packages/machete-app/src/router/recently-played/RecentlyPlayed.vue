<template>
  <Renderer
    title="Recently Played"
    type="Grid"
    :items="songs"
  />
</template>

<script>
import Renderer from '@/components/renderer'

export default {
  name: 'Search',
  components: {
    Renderer
  },
  computed: {
    songs() {
      return this.$store.getters['history/songs']
    }
  }
}
</script>
