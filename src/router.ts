import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App/App.vue'
import DbSettings from './components/DbSettings/DbSettings.vue'
import PhpSettings from './components/PhpSettings/PhpSettings.vue'
import Logs from './components/Logs/Logs'
import DbBrowser from './components/DbBrowser/DbBrowser'
import Install from './components/InstallPackages/Module'
import SystemInfo from './components/SystemInfo/SystemInfo'
import Stats from './components/Stats/Stats'
import Mailtest from './components/Mailtest/Mailtest'
import Systemtask from './components/Systemtask/Systemtask'
import Dashboard from './components/Dashboard/Dashboard'
import SystemsContainer from './components/SystemsContainer/SystemsContainer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/:system',
      name: 'inside',
      component: SystemsContainer,
      children: [
        {
          path: '/Installation/Systemcheck',
          name: 'Systemcheck',
          component: PhpSettings
        },
        {
          path: '/Installation/Database',
          name: 'Datenbank',
          component: DbSettings
        },
        {
          path: '/Installation/Module',
          name: 'Module',
          component: Install
        },

        {
          path: '/System/SystemInfo',
          name: 'System Info',
          component: SystemInfo
        },
        {
          path: '/System/Logs',
          name: 'Logs',
          component: Logs
        },

        {
          path: '/System/Stats',
          name: 'Stats',
          component: Stats
        },

        {
          path: '/System/Mailtest',
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
    }
  ]
})
