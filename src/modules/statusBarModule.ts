const statusBarModule = {
  namespaced: true,
  state: {
    loading: false,
    information: '',
    installerLog: []
  },
  mutations: {
    LOADING_TRUE (state): void {
      state.loading = true
    },
    LOADING_FALSE (state): void {
      state.loading = false
    },
    SET_INFORMATION (state, payload: string) {
      state.information = payload
    },
    INSTALLER_LOG (state, payload: string) {
      state.installerLog.push(payload)
    }
  },
  actions: {},
  getters: {}
}
export default statusBarModule
