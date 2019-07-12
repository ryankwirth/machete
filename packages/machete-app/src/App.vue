<template>
  <div id="app">
    <main>
      <Sidebar />
      <section>
        <TopBar />
        <router-view />
      </section>
    </main>
    <MusicControls />
  </div>
</template>

<script>
import MusicControls from './components/music-controls';
import Sidebar from './components/sidebar';
import TopBar from './components/top-bar';

import './assets/styles/index.scss';

export default {
  name: 'App',
  components: {
    MusicControls,
    Sidebar,
    TopBar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;

  main {
    display: flex;
    max-width: 100%;
    min-height: 100vh;

    section {
      flex: 1;
      overflow: hidden;

      > div {
        padding: 32px 48px;
      }
    }
  }
}
</style>
