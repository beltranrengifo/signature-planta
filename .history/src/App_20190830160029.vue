<template>
  <div id="app">
    <app-title
      :title="title"
      :subtitle="subtitle" />
    <signature-generator />
  </div>
</template>

<script>
import SignatureGenerator from '@/components/SignatureGenerator.vue'
// import AppTitle from '@/components/AppTitle.vue'

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
