import Local from '../Globals/Storage/Local'
import Server from '../Globals/Storage/Server'
import axios from 'axios'
const storageModule = {
  namespaced: true,
  state: {
    storageLocal: null,
    current: null,
    check: null,
    checkError: false
  },
  mutations: {
    GET_SERVERS (state: any, payload: any): void {
      state.storageLocal = payload
    },
    SET_CURRENT (state: any, payload: any): void {
      state.current = payload
    },
    CHECK_SYSTEM (state: any, payload: any): void {
      state.check = payload
    },
    ERROR_SYSTEM (state: any, payload: any): void {
      state.checkError = payload
    }
  },
  actions: {
    async checkServer ({ commit, dispatch }, data) {
      const url = data.url + '/api.php/agp'
      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })

        if (res.status < 300) {
          commit('ERROR_SYSTEM', false)
          commit('CHECK_SYSTEM', res.data)
        }
      } catch (e) {
        // Error handling not yet
        commit('ERROR_SYSTEM', true)
        dispatch('toast/errorToast', e.message, { root: true })
      }
    },
    getServers ({ commit }): Array<Server> {
      let servers
      servers = Local.prototype.getServers()

      commit('GET_SERVERS', servers)
      return servers
    },
    setServer ({ commit, dispatch }, server: Server) {
      Local.prototype.addServer(server)

      dispatch('getServers')
    },
    setServers ({ dispatch }, servers: Array<Server>) {
      Local.prototype.setServers(servers)

      dispatch('getServers')
    },
    setCurrent ({ commit }, server: Server) {
      commit('SET_CURRENT', server)
    },
    deleteServer ({ commit, dispatch }, server: Server) {
      Local.prototype.deleteServer(server)

      dispatch('getServers')
    },
    updateServer ({ dispatch }, data) {
      Local.prototype.updateServer(data.server, data.update)
      dispatch('getServers')
    }
  },
  getters: {}
}
export default storageModule
