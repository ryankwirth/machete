<template>
  <div class="music-controls-playback">
    <img
      :height="96"
      :width="96"
      :src="artwork"
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
        :duration="duration"
        :timestamp="activeTimestamp"
        @setTimestamp="onSetTimestamp"
        @updateTimestamp="onUpdateTimestamp"
      />
    </div>
  </div>
</template>

<script>
import Details from './MusicControlsPlaybackDetails.vue'
import Scrubber from './MusicControlsScrubber.vue'
import Timestamp from './MusicControlsPlaybackTimestamp.vue'

export default {
  name: 'MusicControlsPlayback',
  components: {
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
      // TODO: Propagate this new timestamp to the core service
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

  img {
    margin: 0px 24px;
  }

  .scrubber-stack {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 auto;

    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
