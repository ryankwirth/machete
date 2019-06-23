<template>
  <footer class="music-controls color-background-bg color-gutter-border">
    <Buttons
      :is-playing="isPlaying"
      @pause="onPauseClicked"
      @play="onPlayClicked"
      @previous="onPreviousClicked"
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
  </footer>
</template>

<script>
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
    this.$coreService.play('youtube://b3lH6CULHD0')
    this.$coreService.on('metadata', this.onReceiveMetadata)
    this.$coreService.on('timestamp', this.onReceiveTimestamp)
    this.$coreService.on('status', this.onReceiveStatus)
  },
  beforeDestroy() {
    this.$coreService.off('metadata', this.onReceiveMetadata)
    this.$coreService.off('timestamp', this.onReceiveTimestamp)
    this.$coreService.off('status', this.onReceiveStatus)
  },
  methods: {
    onPauseClicked() {
      this.isPlaying = false
      this.$coreService.pause()
    },
    onPlayClicked() {
      this.isPlaying = true
      this.$coreService.play()
    },
    onPreviousClicked() {
      // If we're more than 5 seconds into the song, go back to the beginning
      if (this.timestamp > 5) {
        this.onSetTimestamp(0)
      }
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
      this.$coreService.seekTo(timestamp)
    },
    onSetVolume(volume) {
      this.volume = volume
      this.$coreService.setVolume(volume)
    }
  }
}
</script>

<style scoped>
.music-controls {
  display: flex;
  align-items: stretch;

  position: fixed;
  bottom: 0;

  width: calc(100% - 24px * 2);
  padding: 24px;
  border-top: 1px solid;
  cursor: default;
}
</style>
