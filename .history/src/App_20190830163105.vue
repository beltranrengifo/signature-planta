<template>
  <div id="app">
    <div class="app-container">
      <app-title
        :title="title"
        :subtitle="subtitle" />
      <signature-generator />
    </div>
  </div>
</template>

<script>
import SignatureGenerator from '@/components/SignatureGenerator.vue'
import AppTitle from '@/components/AppTitle.vue'

export default {
  name: 'app',
  components: {
    SignatureGenerator,
    AppTitle
  },
  data () {
    return {
      title: 'Create your email signature',
      subtitle: 'Grupo La Musa'
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    background: grey;
    min-height: 100vh;
  }
  .app-container {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  }
</style>
