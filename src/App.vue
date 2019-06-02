<template>
  <div id="app">
    <MusicControls/>
  </div>
</template>

<script>
import MusicControls from './components/music-controls'
import CoreService from './services/core'

export default {
  name: 'app',
  components: {
    MusicControls
  },
  mounted() {
    CoreService.init()
      .then(CoreService.getMostPopular)
      .then((mostPopular) => {
        console.log(mostPopular)
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
