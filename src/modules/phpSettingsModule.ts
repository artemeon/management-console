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
    /**
     * get System Informations : php Settings
     * @param data :contains system url and token
     */
    async getPHPSettings ({ commit }, data: any) {
      const url = data.url + '/api.php/installer/module'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer'+data.token
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
