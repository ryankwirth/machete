<template>
  <div id="app">
    <MusicControls/>
  </div>
</template>

<script>
import MusicControls from './components/music-controls'

import './assets/styles/colors.scss'
import './assets/styles/typography.scss'

export default {
  name: 'app',
  components: {
    MusicControls
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
