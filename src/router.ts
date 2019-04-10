import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App/App.vue'
import DbSettings from './components/DbSettings/DbSettings.vue'
import PhpSettings from './components/PhpSettings/PhpSettings.vue'
import Logs from './components/Logs/Logs'
import DbBrowser from './components/DbBrowser/DbBrowser'
import Module from './components/InstallPackages/Module/Module'
import Samplecontent from './components/InstallPackages/Samplecontent/Samplecontent'
import Phpinfo from './components/Phpinfo/Phpinfo'
import Stats from './components/Stats/Stats'
import Mailtest from './components/Mailtest/Mailtest'
import Systemtask from './components/Systemtask/Systemtask'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Installation/Systemcheck/:system',
      name: 'Systemcheck',
      component: PhpSettings
    },
    {
      path: '/Installation/Database/:system',
      name: 'Datenbank',
      component: DbSettings
    },
    {
      path: '/Installation/Module/:system',
      name: 'Module',
      component: Module
    },

    {
      path: '/Installation/Samplecontent/:system',
      name: 'Samplecontent',
      component: Samplecontent
    },

    {
      path: '/System/PHPInfo/:system',
      name: 'PHPInfo',
      component: Phpinfo
    },
    {
      path: '/System/Logs/:system',
      name: 'Logs',
      component: Logs
    },

    {
      path: '/System/Stats/:system',
      name: 'Stats',
      component: Stats
    },

    {
      path: '/System/Mailtest/:system',
      name: 'Mail-test',
      component: Mailtest
    },

    {
      path: '/System/DBBrowser/:system',
      name: 'DBBrowser',
      component: DbBrowser
    },

    {
      path: '/System/Systemtask/:system',
      name: 'Systemtask',
      component: Systemtask
    }
  ]
})
