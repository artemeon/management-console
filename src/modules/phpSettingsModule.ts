import axios from 'axios'

const phpSettingsModule = {
  namespaced: true,
  state: {
    phpSettings: null
  },
  mutations: {
    GET_PHP_SETTINGS (state: any, payload: any): void {
      state.phpSettings = payload
    }
  },
  actions: {
    async getPHPSettings ({ commit }) {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://dev.artemeon.de/agp/api.php/installer/systeminfo'
        })
        console.log(res)
        commit('GET_PHP_SETTINGS', res.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {}
}
export default phpSettingsModule
