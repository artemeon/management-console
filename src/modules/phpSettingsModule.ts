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
          // url: 'https://dev.artemeon.de/agp/installer.php',
          url:
            'https://dev.artemeon.de/agp/installer.php?channel=api&step=phpenv'
          // params: { channel: 'api', step: 'phpenv' },
          // withCredentials: true
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
