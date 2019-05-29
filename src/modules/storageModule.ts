import Local from '../Globals/Storage/Local'
import Server from '../Globals/Storage/Server'
const storageModule = {
  namespaced: true,
  state: {
    storageLocal: null,
    current: null
  },
  mutations: {
    GET_SERVERS (state: any, payload: any): void {
      state.storageLocal = payload
    },
    SET_CURRENT (state: any, payload: any): void {
      state.current = payload
    }
  },
  actions: {
    getServers ({ commit }): Array<Server> {
      let servers
      servers = Local.prototype.getServers()

      commit('GET_SERVERS', servers)
      return servers
    },
    setServer ({ commit, dispatch }, server: Server) {
      Local.prototype.setServer(server)
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
    }
  },
  getters: {}
}
export default storageModule
