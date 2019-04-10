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
     * check if dB Settings are correct
     * @param data contains System-url, token and dbSettings for config.php
     */
    /*
    @TODO handle check false and async Loaders
    */
    async checkDbSettings ({ dispatch, commit }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/installer/connection'
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: data.database
          // authorisation:'bearer' +data.token
        })
        if (res.data.check === true) dispatch('postDbSettings', data)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async postDbSettings ({ commit }, data: any) {
      const url = data.url + '/api.php/installer/config'
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: data.database
          // authorisation:'bearer' +data.token
        })

        commit('POST_DB_SETTINGS', res.data)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    /**
     * check if database drivers are available : all of them !
     * @param commit commit Mutation to change the state
     * @param data Object that contains System-url and token
     */
    async checkDbModule ({ commit }, data: any) {
      // https://dev.artemeon.de/agp/debug.php?debugfile=api_show_routes.php
      const url = data.url + '/api.php/installer/connection'
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer' +data.token
        })

        commit('GET_CHECK_MODULE', res.data)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  },
  getters: {}
}
export default dbSettingsModule
