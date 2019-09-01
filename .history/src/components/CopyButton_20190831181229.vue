<template>
  <div>
    {{text}}
  </div>
</template>

<script>
import clipboard from 'clipboard'

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

</style>