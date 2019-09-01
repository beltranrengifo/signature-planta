<template>
  <div class="instructions__block app-container app-width">
    <h3 class="instructions__title">{{ type }}</h3>
  </div>
</template>

<script>
export default {
  name: 'InstructionsBlock',
  props: {
    type: {
      type: String
    },
    content: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .instructions {
    &__block {
      padding: 24px;
      box-sizing: border-box;
    }
    &__title {
      border-bottom: 1px solid $--color-grey-dark;
      padding-bottom: 12px;
      color: $--color-grey-dark;
    }
  }
</style>