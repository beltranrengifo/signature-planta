import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import '@fortawesome/fontawesome-pro/css/all.css'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false

Vue.use(ToggleButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
