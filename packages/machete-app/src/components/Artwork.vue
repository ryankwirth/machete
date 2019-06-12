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
    showPlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles() {
      if (this.artwork) {
        return {
          backgroundImage: `url(${this.artwork})`,
          backgroundSize: 'cover'
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

  width: 96px;
  height: 96px;

  background-image: url('../assets/images/spinner.gif');
  background-position: center;
  background-repeat: no-repeat;
}
</style>
