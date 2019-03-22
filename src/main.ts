import Vue from 'vue'
import App from './components/App/App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import i18n from './assets/vueI18n/i18n'
// import '../node_modules/bootstrap/scss/bootstrap.scss'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// import './assets/css/bootstrapOverride.scss'
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
