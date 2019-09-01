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
  .logo {
    padding: 24px;
    img {
      max-width: 180px;
    }
  }
</style>
