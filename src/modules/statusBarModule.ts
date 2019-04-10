const statusBarModule = {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    LOADING_TRUE (state): void {
      state.loading = true
    },
    LOADING_FALSE (state): void {
      state.loading = false
    }
  },
  actions: {},
  getters: {}
}
export default statusBarModule
