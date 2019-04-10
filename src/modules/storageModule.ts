import * as Local from '../Globals/Storage/Local'
import Server from '../Globals/Storage/Server'
const storageModule = {
  namespaced: true,
  state: {
    storageLocal: null,
    current: null
  },
  mutations: {
    GET_SERVERS (state: any, payload: any): void {
      console.log(payload)
      state.storageLocal = payload
    },
    SET_CURRENT (state: any, payload: any): void {
      state.current = payload
    }
  },
  actions: {
    getServers ({ commit }): Array<Server> {
      let servers = null
      servers = Local.default.prototype.getServers()
      commit('GET_SERVERS', servers)
      return servers
    },
    setServer ({ commit }, server: Server) {
      Local.default.prototype.setServer(server)
    },
    setCurrent ({ commit }, server: Server) {
      commit('SET_CURRENT', server)
    }
  },
  getters: {}
}
export default storageModule
