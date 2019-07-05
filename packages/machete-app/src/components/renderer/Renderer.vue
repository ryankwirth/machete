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
import { CoreService } from 'machete-core'
import Grid from './RendererGrid.vue'
import List from './RendererList.vue'
import Showcase from './RendererShowcase.vue'

export default {
  name: 'Renderer',
  components: {
    Grid,
    List,
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
    },
    queueOnPlay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onPlay(index) {
      if (!this.items) {
        // If we haven't loaded any items yet, don't do anything.
        return
      }

      // Stop playing the current song and reset the queue.
      CoreService.stop()

      if (this.queueOnPlay) {
        // Queue all of the items in this renderer, then play the clicked item.
        CoreService.queue(this.items)
        CoreService.play(index)
      } else {
        // Simply play the clicked item.
        CoreService.play(this.items[index])
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
