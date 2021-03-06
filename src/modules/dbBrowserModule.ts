import axios from 'axios'

const dbBrowserModule = {
  namespaced: true,
  state: {
    dbTables: null,
    tableData: null
  },
  mutations: {
    LIST_TABLES (state: any, payload: any): void {
      state.dbTables = payload
    },
    DETAIL_TABLE (state: any, payload: any): void {
      state.tableData = payload
    }
  },
  actions: {
    // list all tables
    async listTables ({ commit, dispatch }, data) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/dbbrowser'

      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        commit('LIST_TABLES', res.data)
      } catch (e) {
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async detailTable ({ commit, dispatch }, data) {
      const url = data.url + '/api.php/dbbrowser/' + data.table
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        commit('DETAIL_TABLE', res.data)
      } catch (e) {
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async addIndexToDb ({ dispatch, commit }, data: any) {
      const url = data.url + '/api.php/dbbrowser/index'
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: {
            table: data.table,
            column: data.column
          },
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        dispatch('detailTable', data)
        commit('status/INSTALLER_LOG', 'Added Index to Table', {
          root: true
        })
      } catch (e) {
        commit('status/INSTALLER_LOG', e.message, {
          root: true
        })
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async deleteIndexFromDb ({ dispatch, commit }, data: any) {
      const url = data.url + '/api.php/dbbrowser/index'
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'delete',
          url: url,
          data: {
            table: data.table,
            index: data.index.name
          },
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        dispatch('detailTable', data)
        commit('status/INSTALLER_LOG', 'Deleted Index from Table', {
          root: true
        })
      } catch (e) {
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async recreateIndexDb ({ dispatch, commit }, data: any) {
      const url = data.url + '/api.php/dbbrowser/index'
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'put',
          url: url,
          data: {
            table: data.table,
            index: data.index.name
          },
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        dispatch('detailTable', data)
        commit('status/INSTALLER_LOG', 'Index was recreated successfully', {
          root: true
        })
      } catch (e) {
        commit('status/INSTALLER_LOG', e, {
          root: true
        })
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  },
  getters: {}
}
export default dbBrowserModule
