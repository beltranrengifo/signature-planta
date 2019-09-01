<template>
  <span
    class="copy-button"
    :data-clipboard-target="elementToCopy">
    {{ text }}
  </span>
</template>

<script>
import clipboard from 'clipboard'
new clipboard('.copy-button')

clipboard.on('success', function(e) {
    console.info('Action:', e.action)
    console.info('Text:', e.text)
    console.info('Trigger:', e.trigger)

    e.clearSelection()
})

export default {
  name: 'CopyButton',
  props: {
    text: {
      type: String,
      default: 'Copy'
    },
    elementToCopy: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .copy-button {

  }
</style>