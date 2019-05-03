import axios from 'axios'
const systemInfo = {
  namespaced: true,
  state: {
    systemInfo: null
  },
  mutations: {
    GET_SYSTEM_INFO (state: any, payload: any): void {
      state.systemInfo = payload
    }
  },
  actions: {
    async getSystemInfo ({ commit }, data: any) {
      const url = data.url + '/api.php/systeminfo'

      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url
          // authorisation:'bearer' +data.token
        })
        commit('GET_SYSTEM_INFO', res.data.plugins)
        commit('status/LOADING_FALSE', {}, { root: true })
      } catch (e) {}
    }
  },
  getters: {}
}
export default systemInfo
