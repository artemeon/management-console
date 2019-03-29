import axios from 'axios'

const logsModule = {
  namespaced: true,
  state: {
    logs: null,
    loading: false,
    error: false
  },
  mutations: {
    GET_LOGS (state: any, payload: any): void {
      state.logs = payload
    },
    LOADING (state: any, payload: Boolean): void {
      state.loading = payload
    },
    ERROR (state: any, payload: any): void {
      state.error = payload
    }
  },
  actions: {
    async getLogs ({ commit }, data: any) {
      const url = data.url + '/api.php/installer/log'
      commit('LOADING', true)
      try {
        const res = await axios({
          method: 'get',
          url: url
          // authorisation:'bearer' +data.token
        })
        commit('GET_LOGS', res.data)
        commit('LOADING', false)
      } catch (e) {
        // Error handling not yet
        commit('ERROR', e)
      }
    }
  },
  getters: {}
}
export default logsModule
