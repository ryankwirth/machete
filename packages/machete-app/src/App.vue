<template>
  <div id="app">
    <main>
      <Sidebar/>
      <Page/>
    </main>
    <MusicControls/>
  </div>
</template>

<script>
import MusicControls from './components/music-controls'
import Page from './components/Page.vue'
import Sidebar from './components/sidebar'

import './assets/styles/index.scss'

export default {
  name: 'app',
  components: {
    MusicControls,
    Page,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;

  main {
    display: flex;
  }
}
</style>
