<template>
  <div class="preview app-width app-container">
    {{ template }}
  </div>
</template>

<script>
import template from '@/assets/js/template'
export default {
  name: 'SignaturePrerender',
  data () {
    return {
      template: template
    }
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  padding: 24px 0 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
</style>
