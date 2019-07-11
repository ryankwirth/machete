<template>
  <div class="music-controls-volume-buttons">
    <Button
      width="36"
      height="36"
      padding="8"
      @click="onFavouriteClicked"
    >
      <IconFavouriteFilled v-if="isFavourited" />
      <IconFavouriteOutline v-else />
    </Button>
    <Button
      width="36"
      height="36"
      padding="8"
      @click="onRepeatClicked"
    >
      <IconRepeat />
    </Button>
    <Button
      width="36"
      height="36"
      padding="8"
      @click="onVolumeClicked"
    >
      <IconVolumeOff v-if="isMuted" />
      <IconVolumeDown v-else-if="isLowVolume" />
      <IconVolumeUp v-else />
    </Button>
  </div>
</template>

<script>
import Button from '@/components/BaseButton.vue'
import IconFavouriteFilled from '@/components/icons/IconFavouriteFilled.vue'
import IconFavouriteOutline from '@/components/icons/IconFavouriteOutline.vue'
import IconRepeat from '@/components/icons/IconRepeat.vue'
import IconVolumeDown from '@/components/icons/IconVolumeDown.vue'
import IconVolumeOff from '@/components/icons/IconVolumeOff.vue'
import IconVolumeUp from '@/components/icons/IconVolumeUp.vue'

export default {
  name: 'MusicControlsVolumeButtons',
  components: {
    Button,
    IconFavouriteFilled,
    IconFavouriteOutline,
    IconRepeat,
    IconVolumeDown,
    IconVolumeOff,
    IconVolumeUp
  },
  props: {
    volume: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      mutedVolume: 50
    }
  },
  computed: {
    isFavourited() {
      const song = this.$coreData.song
      return this.$store.getters['favourite/isFavourited'](song)
    },
    isLowVolume() {
      return this.volume < 50
    },
    isMuted() {
      return this.volume === 0
    }
  },
  methods: {
    onFavouriteClicked() {
      const song = this.$coreData.song
      if (this.isFavourited) {
        this.$store.dispatch('favourite/unfavouriteSong', song)
      } else {
        this.$store.dispatch('favourite/favouriteSong', song)
      }
    },
    onRepeatClicked() {

    },
    onVolumeClicked() {
      if (this.isMuted) {
        this.$emit('setVolume', this.mutedVolume)
      } else {
        this.mutedVolume = this.volume
        this.$emit('setVolume', 0)
      }
    }
  }
}
</script>

<style scoped>
.music-controls-volume-buttons {
  display: flex;
  margin-right: 16px;
}
</style>
