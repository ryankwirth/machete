<template>
  <div class="music-controls">
    <Buttons
      :is-playing="true"
    />
    <Playback
      :artist="artist"
      :artwork="artwork"
      :duration="duration"
      :timestamp="timestamp"
      :title="title"
    />
    <Volume/>
  </div>
</template>

<script>
import CoreService from '@/services/core'

import Buttons from './MusicControlsButtons.vue'
import Playback from './MusicControlsPlayback.vue'
import Volume from './MusicControlsVolume'

export default {
  name: 'MusicControls',
  components: {
    Buttons,
    Playback,
    Volume
  },
  data() {
    return {
      artist: '',
      artwork: '',
      duration: 0,
      timestamp: 0,
      title: '',
    }
  },
  mounted() {
    CoreService.init({
      onReceiveMetadata: this.onReceiveMetadata,
      onReceiveTimestamp: this.onReceiveTimestamp
    })
    .then(() => {
      CoreService.play('youtube://XVyEcQosijg')
    })
  },
  methods: {
    onReceiveMetadata(metadata) {
      this.artist = metadata.artist
      this.artwork = metadata.artwork
      this.duration = metadata.duration
      this.title = metadata.title
    },
    onReceiveTimestamp(timestamp) {
      this.timestamp = timestamp
    }
  }
}
</script>

<style scoped>
.music-controls {
  display: flex;
  align-items: stretch;

  position: absolute;
  bottom: 0;

  width: calc(100% - 24px * 2);
  padding: 24px;
  cursor: default;
}
</style>
