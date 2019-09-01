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
      <header class="app-width preview-header">
        <title-component
          title="Preview"/>
        <copy-button
          v-if="person.name"
          elementToCopy="#signature"/>
      </header>
      <signature-prerender :person="person"/>
    </section>
  </div>
</template>

<script>
import SignatureGenerator from '@/components/SignatureGenerator.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import Logo from '@/components/Logo.vue'
import SignaturePrerender from '@/components/SignaturePrerender.vue'
import CopyButton from '@/components/CopyButton.vue'
import EventBus from '@/event-bus.js'

export default {
  name: 'app',
  components: {
    SignatureGenerator,
    TitleComponent,
    Logo,
    SignaturePrerender,
    CopyButton
  },
  data () {
    return {
      title: 'Create your email signature',
      subtitle: 'Grupo La Musa',
      person: {},
      copyButtonText: 'Copiar'
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
      EventBus.person = this.person
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
  .preview-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
</style>
