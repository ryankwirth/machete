<template>
  <BaseButton
    :icon-name="iconName"
    width="48"
    height="48"
    padding="16"
    icon-color-default="#4c5259"
    icon-color-hover="#2e59fe"
    @click="$emit('click')"
  >
    <slot/>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'MusicControlsButtonsItem',
  components: {
    BaseButton
  },
  props: {
    iconName: String
  }
}
</script>
