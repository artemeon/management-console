import axios from 'axios'
// import { Module } from 'vuex';
// import {DbBrowserState,RootState} from "../Globals/Types"
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
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/dbbrowser'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer' +data.token
        })
        commit('LIST_TABLES', res.data)
      } catch (e) {
        // @TODO handle Error
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async detailTable ({ commit }, data) {
      const url = data.url + '/api.php/dbbrowser/' + data.table
      commit('status/LOADING_TRUE', {}, { root: true })
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
          }
        })
        dispatch('detailTable', { url: data.url, table: data.table })
      } catch (e) {
        console.log(e)
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
          }
        })
        dispatch('detailTable', { url: data.url, table: data.table })
      } catch (e) {
        console.log(e)
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
          }
        })
        dispatch('detailTable', { url: data.url, table: data.table })
      } catch (e) {
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  },
  getters: {}
}
export default dbBrowserModule
