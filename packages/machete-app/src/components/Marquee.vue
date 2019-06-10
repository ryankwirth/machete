<template>
  <div class="marquee" ref="container">
    <div class="marquee-item" :style="firstStyles" ref="item">
      <slot/>
    </div>
    <div class="marquee-item" :style="secondStyles">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  data() {
    return {
      widthRatio: 1
    }
  },
  computed: {
    animationDuration() {
      return this.widthRatio * 16
    },
    firstStyles() {
      return {
        animationDelay: `-${this.animationDuration / 2}s`,
        ...this.secondStyles
      }
    },
    isOverflowing() {
      return this.widthRatio > 1
    },
    secondStyles() {
      return {
        animationDuration: `${this.animationDuration}s`,
        animationPlayState: this.isOverflowing ? 'running' : 'paused'
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.recomputeWidthRatio)
  },
  destroyed() {
    window.removeEventListener('resize', this.recomputeWidthRatio)
  },
  updated() {
    this.recomputeWidthRatio()
  },
  methods: {
    recomputeWidthRatio() {
      const containerBounds = this.$refs.container.getBoundingClientRect()
      const itemBounds = this.$refs.item.getBoundingClientRect()
      this.widthRatio = itemBounds.width / containerBounds.width
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.marquee {
  flex: 1 1 auto;
  height: 32px;

  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    right: 0;

    width: 48px;
    height: 32px;
  }

  .marquee-item {
    display: flex;
    align-items: center;

    position: absolute;
    top: 50%;
    min-width: 100%;

    animation: slide-in 0s linear 0s infinite normal none paused;
    transform: translate(0%, -50%);
    will-change: transform;
  }
}

#app:not([dark]) .marquee:after {
  background: linear-gradient(to right, rgba(0,0,0,0), $primary-light);
}

#app[dark] .marquee:after {
  background: linear-gradient(to right, rgba(0,0,0,0), $primary-dark);
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
