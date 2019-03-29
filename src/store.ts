import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import phpSettingsModule from './modules/phpSettingsModule'
import installPackagesModule from './modules/installPackagesModule'
import dbSettingsModule from './modules/dbSettingsModule'
import storageModule from './modules/storageModule'
import logsModule from './modules/logsModule'
Vue.use(Vuex)
Vue.use(VueI18n)
export default new Vuex.Store({
  modules: {
    phpSettingsModule: phpSettingsModule,
    installPackagesModule: installPackagesModule,
    dbSettingsModule: dbSettingsModule,
    storageModule: storageModule,
    logsModule: logsModule
  }
})
