<template>
  <span class="copy-button">
    {{ text }}
  </span>
</template>

<script>
import clipboard from 'clipboard'
new clipboard('.copy-button')

export default {
  name: 'CopyButton',
  props: {
    text: {
      type: String,
      default: 'Copy'
    }
  }
}
</script>

<style lang="scss" scoped>
  .copy-button {

  }
</style>