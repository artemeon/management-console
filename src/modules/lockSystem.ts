import axios from 'axios'
const lockSystem = {
  namespaced: true,
  state: {
    locked: false
  },
  mutations: {
    CHECK_LOCK (state: any, payload: boolean): void {
      state.locked = payload
    },
    LOCK_SYSTEM (state: any, payload: boolean): void {
      state.locked = payload
    },
    UNLOCK_SYSTEM (state: any, payload: boolean): void {
      state.locked = payload
    }
  },
  actions: {
    async checkIfLocked ({ commit }, data: any) {
      const url = data.url + '/api.php/systemlock'

      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url
          // authorisation:'bearer' +data.token
        })
        commit('CHECK_LOCK', res.data.locked)
        commit('status/LOADING_FALSE', {}, { root: true })
      } catch (e) {}
    },
    async lockSystem ({ commit }, data: any) {
      const url = data.url + '/api.php/systemlock'

      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'post',
          url: url
          // authorisation:'bearer' +data.token
        })
        commit('LOCK_SYSTEM', true)
        commit('status/LOADING_FALSE', {}, { root: true })
      } catch (e) {}
    },
    async unlockSystem ({ commit }, data: any) {
      const url = data.url + '/api.php/systemlock'

      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'delete',
          url: url
          // authorisation:'bearer' +data.token
        })
        commit('UNLOCK_SYSTEM', false)
        commit('status/LOADING_FALSE', {}, { root: true })
      } catch (e) {}
    }
  },
  getters: {}
}
export default lockSystem
