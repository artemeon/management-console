import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App/App.vue'
import DbSettings from './components/DbSettings/DbSettings.vue'
import InstallPackages from './components/InstallPackages/InstallPackages.vue'
import PhpSettings from './components/PhpSettings/PhpSettings.vue'
import Finish from './components/Finish/Finish.vue'

import Installation from './components/Installation/Installation.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: App
    // },

    {
      path: '/dbSettings',
      name: 'dbSettings',
      component: DbSettings
    },
    {
      path: '/installPackages',
      name: 'installPackages',
      component: InstallPackages
    },
    {
      path: '/phpSettings',
      name: 'phpSettings',
      component: PhpSettings
    },

    {
      path: '/finish',
      name: 'ende',
      component: Finish
    }
  ]
})
