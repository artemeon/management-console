import * as Local from '../Globals/Storage/Local'
import Server from '../Globals/Storage/Server'
const storageModule = {
  namespaced: true,
  state: {
    storageLocal: null
  },
  mutations: {},
  actions: {
    getServers ({ commit }): Array<Server> {
      return Local.default.prototype.getServers()
    },
    setServer ({ commit }, server: Server) {
      Local.default.prototype.setServer(server)
    }
  },
  getters: {}
}
export default storageModule
