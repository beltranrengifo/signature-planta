<template>
  <div id="app">
    <signature-generator />
  </div>
</template>

<script>
import SignatureGenerator from './components/SignatureGenerator.vue'

export default {
  name: 'app',
  components: {
    SignatureGenerator
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
