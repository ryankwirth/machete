<template>
  <div class="renderer">
    <div class="title color-header">
      {{ title }}
    </div>
    <component
      :is="type"
      :items="items"
      @play="onPlay"
    />
  </div>
</template>

<script>
import { CoreService, ItemType } from 'machete-core'
import Grid from './RendererGrid.vue'
import Showcase from './RendererShowcase.vue'

export default {
  name: 'Renderer',
  components: {
    Grid,
    Showcase
  },
  props: {
    title: {
      type: String,
      default: 'Loading...'
    },
    type: {
      type: String,
      default: 'Grid'
    },
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    onPlay(index) {
      // Stop playing the current song and reset the current queue.
      CoreService.stop()

      const item = this.items[index]
      if (item.type === ItemType.PLAYLIST) {
        // Don't queue this playlist -- just start playing it.
        CoreService.play(item)
      } else {
        // Queue all of the items in this renderer and play the one that was
        // clicked.
        CoreService.queue(this.items)
        CoreService.play(index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.renderer {
  margin-bottom: 32px;

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    cursor: default;
  }
}
</style>
