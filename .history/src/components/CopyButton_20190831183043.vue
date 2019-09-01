<template>
  <span
    class="copy-button"
    :data-clipboard-target="elementToCopy">
    {{ text }}
  </span>
</template>

<script>
import clipboard from 'clipboard'

export default {
  name: 'CopyButton',
  data () {
    clipboardInstance: null
  },
  props: {
    text: {
      type: String,
      default: 'Copy'
    },
    elementToCopy: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.clipboardInstance = new clipboard('.copy-button')
    this.clipboardInstance.on('success', function(e) {
        console.info('Action:', e.action)
        console.info('Text:', e.text)
        console.info('Trigger:', e.trigger)
        e.clearSelection()
    })
  }
}
</script>

<style lang="scss" scoped>
  .copy-button {

  }
</style>