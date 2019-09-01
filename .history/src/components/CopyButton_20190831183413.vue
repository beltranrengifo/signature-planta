<template>
  <span
    class="copy__button"
    :data-clipboard-target="elementToCopy">
    {{ text }}
    <span
      v-if="showConfirm"
      class="copy__confirm">
      ¡Copiado!
    </span>
  </span>
</template>

<script>
import clipboard from 'clipboard'

export default {
  name: 'CopyButton',
  data () {
    return {
      clipboardInstance: null,
      showConfirm: false
    }
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
  .copy__button {
    position: relative;
    text-transform: uppercase;
    font-size: 10px;
    color: $--color-grey-dark;
    border: 1px solid $--color-grey-dark;
    padding: 3px 6px;
    border-radius: 4px;
  }
</style>