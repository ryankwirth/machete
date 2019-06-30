<template>
  <div
    class="artwork"
    :style="styles"
  >
    <Overlay
      v-if="showPlaying"
      :radius="radius"
    >
      <IconPlaying />
    </Overlay>
    <Overlay
      v-else-if="showHovering"
      :radius="radius"
    >
      <IconPlay />
    </Overlay>
  </div>
</template>

<script>
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPlaying from '@/components/icons/IconPlaying.vue'
import Overlay from './ArtworkOverlay.vue'

export default {
  name: 'Artwork',
  components: {
    IconPlay,
    IconPlaying,
    Overlay
  },
  props: {
    radius: {
      type: Number,
      default: 0
    },
    showHovering: {
      type: Boolean,
      default: false
    },
    showPlaying: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 80
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    styles() {
      if (this.url) {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
          backgroundImage: `url(${this.url})`,
          backgroundSize: 'cover',
          borderRadius: `${this.radius}px`
        }
      } else {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.artwork {
  flex: 0 0 auto;

  background-image: url('../../assets/images/spinner.gif');
  background-position: center;
  background-repeat: no-repeat;
}
</style>
