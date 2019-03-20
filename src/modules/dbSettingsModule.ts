import axios from 'axios'

const dbSettingsModule = {
  namespaced: true,
  state: {
    dbSettings: null,
    checkModule: null
  },
  mutations: {
    POST_DB_SETTINGS (state: any, payload: any): void {
      state.dbSettings = payload
    },
    GET_CHECK_MODULE (state: any, payload: any): void {
      state.checkModule = payload
    }
  },
  actions: {
    async postDbSettings ({ commit }, db: any) {
      try {
        const res = await axios({
          method: 'post',
          url:
            'https://dev.artemeon.de/agp/installer.php?channel=api&step=validateDataPassed',
          data: db
        })
        console.log('res', res)
        commit('POST_DB_SETTINGS', res.data)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
    },
    async checkDbModule ({ commit }, data: any) {
      try {
        const res = await axios({
          method: 'post',
          url:
            'https://dev.artemeon.de/agp/installer.php?channel=api&step=checkModule',
          data: {
            dbDriver: data.dbDriver
          }
        })
        res.data.found === true
          ? commit('GET_CHECK_MODULE', true)
          : commit('GET_CHECK_MODULE', false)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
    }
  },
  getters: {}
}
export default dbSettingsModule
