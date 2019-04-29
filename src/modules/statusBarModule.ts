const statusBarModule = {
  namespaced: true,
  state: {
    loading: false,
    information: null,
    installerLog: []
  },
  mutations: {
    LOADING_TRUE (state: statusBar): void {
      state.loading = true
    },
    LOADING_FALSE (state: statusBar): void {
      state.loading = false
    },
    SET_INFORMATION (state: statusBar, payload: string) {
      state.information = payload
    },
    INSTALLER_LOG (state: statusBar, payload: string) {
      state.installerLog.push(payload)
    }
  },
  actions: {},
  getters: {}
}

export default statusBarModule
interface statusBar {
  loading: Boolean
  information: String
  installerLog: Array<String>
}
