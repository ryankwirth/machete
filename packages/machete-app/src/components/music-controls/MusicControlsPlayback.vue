<template>
  <div class="music-controls-playback">
    <Artwork :url="url" />
    <div class="scrubber-stack">
      <div class="details">
        <Details />
        <Timestamp :timestamp="timestamp" />
      </div>
      <Scrubber
        :total="duration"
        :value="timestamp"
        @setValue="onSetTimestamp"
        @updateValue="onUpdateTimestamp"
      />
    </div>
  </div>
</template>

<script>
import { CoreService } from 'machete-core'
import Artwork from '@/components/artwork'
import Details from './MusicControlsPlaybackDetails.vue'
import Scrubber from './MusicControlsScrubber.vue'
import Timestamp from './MusicControlsPlaybackTimestamp.vue'

export default {
  name: 'MusicControlsPlayback',
  components: {
    Artwork,
    Details,
    Scrubber,
    Timestamp
  },
  data() {
    return {
      modified: false,
      modifiedTimestamp: 0
    }
  },
  computed: {
    url() {
      return this.$coreData.metadata.thumbnail || ''
    },
    duration() {
      return this.$coreData.metadata.duration || 1
    },
    timestamp() {
      return this.modified ? this.modifiedTimestamp : this.$coreData.timestamp
    }
  },
  methods: {
    onSetTimestamp(timestamp) {
      this.modified = false
      CoreService.seekTo(timestamp)
    },
    onUpdateTimestamp(timestamp) {
      this.modified = true
      this.modifiedTimestamp = timestamp
    }
  }
}
</script>

<style lang="scss" scoped>
.music-controls-playback {
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  padding: 0px 48px;

  .scrubber-stack {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 auto;

    margin-left: 24px;

    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
