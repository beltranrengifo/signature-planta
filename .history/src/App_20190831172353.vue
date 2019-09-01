<template>
  <div id="app">
    <section>
      <logo
       :logo="logo"
       alt="Grupo La Musa"/>
      <title-component
        class="app-width"
        :title="title"
        tag="h1"/>
      <div
        class="app-container app-width">
        <signature-generator @signatureChange="updateSignature"/>
      </div>
    </section>
    <section
      class="m-t-48">
      <title-component
        class="app-width"
        title="Preview"/>
      <signature-prerender :person="person"/>
    </section>
  </div>
</template>

<script>
import SignatureGenerator from '@/components/SignatureGenerator.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import Logo from '@/components/Logo.vue'
import SignaturePrerender from '@/components/SignaturePrerender.vue'
import 'reset-css'
export default {
  name: 'app',
  components: {
    SignatureGenerator,
    TitleComponent,
    Logo,
    SignaturePrerender
  },
  data () {
    return {
      title: 'Create your email signature',
      subtitle: 'Grupo La Musa',
      person: {}
    }
  },
  computed: {
    logo () {
      return require('@/assets/images/logo-grupo-musa-364_v2-1.png')
    }
  },
  methods: {
    updateSignature (val) {
      this.person = val
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    background: $--color-grey;
    min-height: 100vh;
    padding-bottom: 48px;
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
