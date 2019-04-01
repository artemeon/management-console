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
    async listTables ({ commit }, data) {
      const url = data.url + '/api.php/dbbrowser'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer' +data.token
        })
        commit('LIST_TABLES', res.data)
      } catch (e) {
        console.log(e)
      }
    },
    async detailTable ({ commit }, data) {
      const url = data.url + '/api.php/dbbrowser/' + data.table
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer' +data.token
        })
        commit('DETAIL_TABLE', res.data)
      } catch (e) {
        console.log(e)
      }
    },
    async addIndexToDb ({ dispatch }, data: any) {
      const url = data.url + '/api.php/dbbrowser/index'
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: {
            table: data.table,
            column: data.column
          }
        })
        dispatch('detailTable', { url: data.url, table: data.table })
      } catch (e) {
        console.log(e)
      }
    },
    async deleteIndexFromDb ({ dispatch }, data: any) {
      const url = data.url + '/api.php/dbbrowser/index'
      try {
        const res = await axios({
          method: 'delete',
          url: url,
          data: {
            // table: data.table,
            // index: data.index
            table: '',
            index: ''
          }
        })
        dispatch('detailTable', { url: data.url, table: data.table })
      } catch (e) {
        console.log(e)
      }
    },
    async recreateIndexDb ({ dispatch }, data: any) {
      const url = data.url + '/api.php/dbbrowser/index'
      try {
        const res = await axios({
          method: 'put',
          url: url,
          data: {
            table: data.table,
            index: data.index
          }
        })
        dispatch('detailTable', { url: data.url, table: data.table })
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {}
}
export default dbBrowserModule
