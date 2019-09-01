<template>
  <div class="app-title">
    h1.app-title__title
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