import axios from 'axios'

const phpSettingsModule = {
  namespaced: true,
  state: {
    phpSettings: null
  },
  mutations: {
    GET_PHP_SETTINGS (state: any, payload: any): void {
      state.phpSettings = payload
    },
    ERROR_PHP_SETTINGS (state: any): void {
      state.phpSettings = 'error'
    }
  },
  actions: {
    /**
     * get System Informations : php Settings
     * @param data :contains system url and token
     */
    async getPHPSettings ({ dispatch, commit }, data: any) {
      const url = data.url + '/api.php/installer/systeminfo'
      commit('status/LOADING_TRUE', {}, { root: true })

      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })

        commit('GET_PHP_SETTINGS', res.data)
      } catch (e) {
        commit('ERROR_PHP_SETTINGS')
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  },
  getters: {}
}
export default phpSettingsModule
