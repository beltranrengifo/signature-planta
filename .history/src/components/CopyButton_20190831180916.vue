<template>
  <div>
    {{text}}
  </div>
</template>

<script>
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