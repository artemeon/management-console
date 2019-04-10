import Vue from 'vue'
import App from './components/App/App.vue'
import router from './router'
import store from './store'
import i18n from './assets/vueI18n/i18n'
// import '../node_modules/bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrapOverride.scss'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
