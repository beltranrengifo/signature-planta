import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
// import 'reset-css'
import '@fortawesome/fontawesome-pro/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
