<template>
  <div class="artwork" :style="styles">
    <Play v-if="showPlay"/>
  </div>
</template>

<script>
import Play from './ArtworkPlay.vue'

export default {
  name: 'Artwork',
  components: {
    Play
  },
  props: {
    artwork: {
      type: String,
      required: true
    },
    radius: {
      type: Number,
      default: 0
    },
    showPlay: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 96
    }
  },
  computed: {
    styles() {
      if (this.artwork) {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
          backgroundImage: `url(${this.artwork})`,
          backgroundSize: 'cover',
          borderRadius: `${this.radius}px`
        }
      } else {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.artwork {
  flex: 0 0 auto;

  background-image: url('../assets/images/spinner.gif');
  background-position: center;
  background-repeat: no-repeat;
}
</style>
