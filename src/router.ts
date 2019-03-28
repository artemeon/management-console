import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App/App.vue'
import AdminLogin from './components/AdminLogin/AdminLogin.vue'
import DbSettings from './components/DbSettings/DbSettings.vue'
import InstallPackages from './components/InstallPackages/InstallPackages.vue'
import PhpSettings from './components/PhpSettings/PhpSettings.vue'
import UpdatePackages from './components/UpdatePackages/UpdatePackages.vue'
import Finish from './components/Finish/Finish.vue'

import Installation from './components/Installation/Installation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Installation',
      name: 'Installation',
      component: Installation
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: AdminLogin
    },
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
      path: '/updatePackages',
      name: 'updatePackages',
      component: UpdatePackages
    },
    {
      path: '/finish',
      name: 'ende',
      component: Finish
    }
  ]
})
