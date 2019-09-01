<template>
  <div id="app">
    <app-logo
     :logo="logo"/>
    <app-title
      class="app-width"
      :title="title"
      :subtitle="subtitle" />
    <div
      class="app-container app-width">
      <signature-generator />
    </div>
  </div>
</template>

<script>
import SignatureGenerator from '@/components/SignatureGenerator.vue'
import AppTitle from '@/components/AppTitle.vue'
import AppLogo from '@/components/AppLogo.vue'

export default {
  name: 'app',
  components: {
    SignatureGenerator,
    AppTitle,
    AppLogo
  },
  data () {
    return {
      title: 'Create your email signature',
      subtitle: 'Grupo La Musa',
      logo: require('https://grupolamusa.com/media/logo-grupo-musa-364_v2-1.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    background: $--color-grey;
    min-height: 100vh;
  }
  .app-width {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
  }
  .app-container {
    min-height: 50vh;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
    background: $--color-white;
    border-radius: 4px;
  }
</style>
