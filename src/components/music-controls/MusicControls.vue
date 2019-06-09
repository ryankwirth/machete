<template>
  <div class="music-controls">
    <Buttons
      :is-playing="isPlaying"
      @pause="onPauseClicked"
      @play="onPlayClicked"
    />
    <Playback
      :artist="artist"
      :artwork="artwork"
      :duration="duration"
      :timestamp="timestamp"
      :title="title"
      @setTimestamp="onSetTimestamp"
    />
    <Volume
      :volume="volume"
      @setVolume="onSetVolume"
    />
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
      duration: 1,
      isPlaying: false,
      timestamp: 0,
      title: '',
      volume: 100
    }
  },
  mounted() {
    CoreService.init({
      onReceiveMetadata: this.onReceiveMetadata,
      onReceiveTimestamp: this.onReceiveTimestamp,
      onReceiveStatus: this.onReceiveStatus
    })
    .then(() => {
      CoreService.play('youtube://_BYIEXzdnlY')
    })
  },
  methods: {
    onPauseClicked() {
      this.isPlaying = false
      CoreService.pause()
    },
    onPlayClicked() {
      this.isPlaying = true
      CoreService.play()
    },
    onReceiveMetadata(metadata) {
      this.artist = metadata.artist
      this.artwork = metadata.artwork
      this.duration = metadata.duration
      this.title = metadata.title

      // Display track information in the document title
      document.title = `${this.title} - ${this.artist}`
    },
    onReceiveTimestamp(timestamp) {
      this.timestamp = timestamp
    },
    onReceiveStatus(status) {
      this.isPlaying = status.isPlaying
      this.volume = status.volume
    },
    onSetTimestamp(timestamp) {
      this.timestamp = timestamp
      CoreService.seekTo(timestamp)
    },
    onSetVolume(volume) {
      this.volume = volume
      CoreService.setVolume(volume)
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
