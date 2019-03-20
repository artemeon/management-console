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
    /**
     * post dbSettings and save into config.php
     * @param data contains System-url, token and dbSettings for config.php
     */
    async postDbSettings ({ commit }, data: any) {
      const url = data.url + '/api.php/installer/connection'
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: data.database
          // authorisation:'bearer' +data.token
        })
        console.log('res', res)
        commit('POST_DB_SETTINGS', res.data)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
    },
    /**
     * check if database drivers are available : all of them !
     * @param commit commit Mutation to change the state
     * @param data Object that contains System-url and token
     */
    async checkDbModule ({ commit }, data: any) {
      // https://dev.artemeon.de/agp/debug.php?debugfile=api_show_routes.php
      const url = data.url + '/api.php/installer/connection'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer' +data.token
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
