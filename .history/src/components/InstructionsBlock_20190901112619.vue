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
    }
  }
}
</script>

<style lang="scss" scoped>
  .instructions {
    &__block {
      padding: 24px;
    }
  }
</style>