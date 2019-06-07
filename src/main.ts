import Vue from 'vue'
import App from './components/App/App.vue'
import router from './router'
import store from './store'
import i18n from './assets/vueI18n/i18n'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@artemeon/vue-library'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
