import axios from 'axios'

const logsModule = {
  namespaced: true,
  state: {
    logs: null,
    loading: false,
    error: false,
    log: null
  },
  mutations: {
    GET_LOG_FILES (state: any, payload: any): void {
      state.logs = payload
    },
    GET_LOG_FOR_ENTRY (state: any, payload: any): void {
      state.log = payload
    },
    LOADING (state: any, payload: Boolean): void {
      state.loading = payload
    },
    ERROR (state: any, payload: any): void {
      state.error = payload
    }
  },
  actions: {
    async getLogFiles ({ commit }, data: any) {
      const url = data.url + '/api.php/installer/log'
      commit('LOADING', true)
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        commit('GET_LOG_FILES', res.data)
        commit('LOADING', false)
      } catch (e) {
        // Error handling not yet
        commit('ERROR', e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async getLogForFile ({ commit }, data: any) {
      const url = data.url + '/api.php/installer/log/' + data.log

      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        commit('GET_LOG_FOR_ENTRY', res.data)
      } catch (e) {
        // Error handling not yet
        commit('ERROR', e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  },
  getters: {}
}
export default logsModule
