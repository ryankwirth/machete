<template>
  <section class="page">
    <TopBar/>
    <div class="content">
      <slot/>
    </div>
  </section>
</template>

<script>
import TopBar from './top-bar'

export default {
  name: 'Page',
  components: {
    TopBar
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;

  .content {
    flex: 1 0 auto;

    > div {
      padding: 32px 48px;
    }
  }
}
</style>
