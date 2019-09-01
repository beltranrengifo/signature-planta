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
    &__title {
      font-size: 24px;
      font-family: $--font-serif;
      margin-bottom: 16px;
    }
    &__subtitle {
      font-size: 12px;
      font-family: $--font-sans;
      display: block;
      margin-bottom: 8px;
    }
  }
</style>
