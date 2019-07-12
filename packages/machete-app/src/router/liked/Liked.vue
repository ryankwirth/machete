<template>
  <Renderer
    title="Liked Songs"
    type="Grid"
    :items="songs"
  />
</template>

<script>
import Renderer from '@/components/renderer'

export default {
  name: 'Liked',
  components: {
    Renderer
  },
  computed: {
    songs() {
      return this.$store.getters['favourite/songs']
    }
  }
}
</script>
