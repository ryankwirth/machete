<template>
  <div id="app">
    <main>
      <Sidebar/>
      <HomePage/>
    </main>
    <MusicControls/>
  </div>
</template>

<script>
import HomePage from './components/home-page'
import MusicControls from './components/music-controls'
import Sidebar from './components/sidebar'

import './assets/styles/base.scss'
import './assets/styles/colors.scss'
import './assets/styles/typography.scss'

export default {
  name: 'app',
  components: {
    HomePage,
    MusicControls,
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
