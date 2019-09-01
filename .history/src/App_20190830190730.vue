<template>
  <div id="app">
    <app-logo
     :logo="logo"
     alt="Grupo La Musa"/>
    <title-component
      class="app-width"
      :title="title"
      tag="h1"/>
    <div
      class="app-container app-width">
      <signature-generator />
    </div>
    <title-component
      class="app-width"
      title="Preview"/>
    <signature-prerender />
  </div>
</template>

<script>
import SignatureGenerator from '@/components/SignatureGenerator.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import AppLogo from '@/components/AppLogo.vue'
import SignaturePrerender from '@/components/SignaturePrerender.vue'

export default {
  name: 'app',
  components: {
    SignatureGenerator,
    TitleComponent,
    AppLogo,
    SignaturePrerender
  },
  data () {
    return {
      title: 'Create your email signature',
      subtitle: 'Grupo La Musa'
    }
  },
  computed: {
    logo () {
      return require('@/assets/images/logo-grupo-musa-364_v2-1.png')
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
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
    background: $--color-white;
    border-radius: 4px;
  }
</style>
