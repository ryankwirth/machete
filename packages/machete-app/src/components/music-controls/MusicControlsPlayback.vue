<template>
  <div class="music-controls-playback">
    <Artwork
      :artwork="artwork"
    />
    <div class="scrubber-stack">
      <div class="details">
        <Details
          :artist="artist"
          :title="title"
        />
        <Timestamp
          :duration="duration"
          :timestamp="activeTimestamp"
        />
      </div>
      <Scrubber
        :total="duration"
        :value="activeTimestamp"
        @setValue="onSetTimestamp"
        @updateValue="onUpdateTimestamp"
      />
    </div>
  </div>
</template>

<script>
import Artwork from '@/components/Artwork.vue'
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
  props: {
    artist: {
      type: String,
      required: true
    },
    artwork: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    title: {
      type: String,
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
      this.modified = false
      this.$emit('setTimestamp', timestamp)
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
  padding: 0px 24px;

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
