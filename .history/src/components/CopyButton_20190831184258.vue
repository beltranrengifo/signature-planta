<template>
  <span
    class="copy__button"
    :class="{'active': isCopied}"
    :data-clipboard-target="elementToCopy">
    {{ text }}
  </span>
</template>

<script>
import clipboard from 'clipboard'

export default {
  name: 'CopyButton',
  data () {
    return {
      clipboardInstance: null,
      isCopied: true,
      text: 'copiar'
    }
  },
  props: {
    elementToCopy: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.clipboardInstance = new clipboard('.copy__button')
    this.clipboardInstance.on('success', e => {
        console.info('Action:', e.action)
        console.info('Text:', e.text)
        console.info('Trigger:', e.trigger)
        this.text = 'copiado'
        this.isCopied = true
        setTimeout(() => {
          this.isCopied = false
          this.text = 'copiar'
          e.clearSelection()
        }, 2000)
    })
  }
}
</script>

<style lang="scss" scoped>
  .copy__button {
    position: relative;
    text-transform: uppercase;
    font-size: 10px;
    color: $--color-success;
    border: 1px solid $--color-success;
    padding: 3px 6px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s;
    &.active {
      background: $--color-success;
      color: white;
    }
  }
</style>