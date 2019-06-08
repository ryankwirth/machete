<template>
  <BaseButton
    class="c-secondary-variant c-accent-hover"
    :icon-name="iconName"
    width="48"
    height="48"
    padding="16"
    @click="$emit('click')"
  >
    <slot/>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'MusicControlsButton',
  components: {
    BaseButton
  },
  props: {
    iconName: String
  }
}
</script>
