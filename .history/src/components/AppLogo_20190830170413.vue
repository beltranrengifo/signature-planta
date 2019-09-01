<template>
  <div class="logo">
    <img
    :src="logo"
    :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    logo: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'logo'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
