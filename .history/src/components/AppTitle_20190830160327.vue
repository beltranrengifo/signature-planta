<template>
  <div class="app-title">
    <h1 class="app-title__title">
      <small>{{ subtitle }}</small>
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

</style>
