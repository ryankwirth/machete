<template>
  <div class="top-bar-navigation">
    <Button @click="onClickBackward">
      <IconArrowBackward/>
    </Button>
    <Button @click="onClickForward">
      <IconArrowForward/>
    </Button>
  </div>
</template>

<script>
import Button from './TopBarNavigationButton.vue'
import IconArrowBackward from '@/components/icons/IconArrowBackward.vue'
import IconArrowForward from '@/components/icons/IconArrowForward.vue'

export default {
  name: 'TopBarNavigation',
  components: {
    Button,
    IconArrowBackward,
    IconArrowForward
  },
  methods: {
    onClickBackward() {
      this.$router.go(-1)
    },
    onClickForward() {
      this.$router.go(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar-navigation {
  display: flex;
  margin-right: 32px;
}
</style>
