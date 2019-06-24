<template>
  <div :class="classes" @click="onClick">
    <BaseIcon width="20" height="20">
      <slot/>
    </BaseIcon>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'SidebarSectionButton',
  components: {
    BaseIcon
  },
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: '/'
    }
  },
  computed: {
    active() {
      return this.$route.path === this.path
    },
    classes() {
      return {
        'sidebar-section-button': true,
        'color-text': !this.active,
        'color-background': this.active,
        'color-background-hover': true,
        'color-accent-bg': this.active,
        'color-accent-bg-hover': true
      }
    }
  },
  methods: {
    onClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-section-button {
  display: flex;
  align-items: center;

  margin-bottom: 2px;
  padding: 12px 16px;
  border-radius: 3px;
  cursor: pointer;

  .label {
    font-weight: 500;
    font-size: 14px;

    padding-left: 16px;
  }
}
</style>
