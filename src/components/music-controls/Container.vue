<template>
  <div class="container">
    <Buttons/>
    <Playback/>
    <Volume/>
  </div>
</template>

<script>
import Buttons from './Buttons.vue'
import Playback from './Playback.vue'
import Volume from './Volume.vue'

export default {
  name: 'Container',
  components: {
    Buttons,
    Playback,
    Volume
  }
}
</script>

<style scoped>
.container {
  display: flex;
  padding: 2em;
}
</style>
