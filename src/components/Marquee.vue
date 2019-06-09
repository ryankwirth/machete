<template>
  <div :class="classes" ref="container">
    <div class="marquee-item" ref="item">
      <slot/>
    </div>
    <div class="marquee-item">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  data() {
    return {
      isOverflowing: false
    }
  },
  computed: {
    classes() {
      return {
        marquee: true,
        animated: this.isOverflowing
      }
    }
  },
  updated() {
    // Avoid using a computed property so we can re-check when the
    // slot template changes
    const containerBounds = this.$refs.container.getBoundingClientRect()
    const itemBounds = this.$refs.item.getBoundingClientRect()
    if (itemBounds.width > containerBounds.width) {
      this.isOverflowing = true
    }
  }
}
</script>

<style lang="scss" scoped>
.marquee {
  flex: 1 1 auto;
  height: 24px;

  position: relative;
  overflow: hidden;

  &:after {
    position: absolute;
    right: 0;

    width: 48px;
    height: 24px;
    background: linear-gradient(to right, rgba(0,0,0,0), #FFFFFF);
  }

  &.animated .marquee-item {
    animation: 16s slide-in infinite linear;
  }

  .marquee-item {
    display: flex;
    align-items: center;

    position: absolute;
    top: 50%;
    min-width: 100%;

    transform: translate(0%, -50%);
    will-change: transform;

    &:nth-child(1) {
      animation-delay: -8s;
    }

    &:nth-child(2) {
      transform: translate(100%, -50%);
    }
  }
}

@keyframes slide-in {
  0% {
    transform: translate(100%, -50%);
  }

  10% {
    transform: translate(100%, -50%);
  }

  45% {
    transform: translate(0%, -50%);
  }

  55% {
    transform: translate(0%, -50%);
  }

  90% {
    transform: translate(-100%, -50%);
  }

  100% {
    transform: translate(-100%, -50%);
  }
}
</style>
