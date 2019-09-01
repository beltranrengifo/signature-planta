<template>
  <div
    :class="{'is-folded': folded}"
    class="instructions__block app-container app-width">
    <h3 class="instructions__title">
      {{ type }}
      <span
        class="accordion-trigger"
        @click="handleAccordion">Click</span>
    </h3>
    <ol class="instructions__list">
      <li
        class="instructions__item"
        v-for="item in content"
        :key="item">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'InstructionsBlock',
  data () {
    return {
      folded: true
    }
  },
  props: {
    type: {
      type: String
    },
    content: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleAccordion () {
      this.folded = !this.folded
    }
  }
}
</script>

<style lang="scss" scoped>
  .instructions {
    overflow: hidden;
    &__block {
      padding: 24px;
      box-sizing: border-box;
    }
    &__title {
      border-bottom: 1px solid $--color-grey-dark;
      padding-bottom: 12px;
      color: $--color-grey-dark;
    }
    &__item {
      line-height: 1.75;
    }
    &.is-folded {
      ol {
        height: 0;
      }
    }
  }
</style>
