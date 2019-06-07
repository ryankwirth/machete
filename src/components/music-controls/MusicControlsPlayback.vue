<template>
  <div class="music-controls-playback">
    <Scrubber
      :duration="duration"
      :timestamp="activeTimestamp"
      @setTimestamp="onSetTimestamp"
      @updateTimestamp="onUpdateTimestamp"
    />
    <Timestamp :duration="duration" :timestamp="activeTimestamp"/>
  </div>
</template>

<script>
import Scrubber from './MusicControlsScrubber.vue'
import Timestamp from './MusicControlsPlaybackTimestamp.vue'

export default {
  name: 'MusicControlsPlayback',
  components: {
    Scrubber,
    Timestamp
  },
  props: {
    duration: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      modified: false,
      modifiedTimestamp: 0
    }
  },
  computed: {
    activeTimestamp() {
      return this.modified ? this.modifiedTimestamp : this.timestamp
    }
  },
  methods: {
    onSetTimestamp(timestamp) {
      // TODO: Propagate this new timestamp to the core service
    },
    onUpdateTimestamp(timestamp) {
      this.modified = true
      this.modifiedTimestamp = timestamp
    }
  }
}
</script>

<style scoped>
.music-controls-playback {
  flex: 1 1 auto;
}
</style>
