<template>
  <div class="app-title">
    <h1 class="app-title__title">
      <small class="app-title__subtitle">{{ subtitle }}</small>
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-title {
    padding-top: 6rem;
    &__title {
      font-family: $--font-serif;
    }
    &__subtitle {
      font-family: $--font-sans;
    }
  }
</style>
