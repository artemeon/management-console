import * as Local from '../Globals/Storage/Local'
import Server from '../Globals/Storage/Server'
import axios from 'axios'
const systemTaskModule = {
  namespaced: true,
  state: {
    systemTasks: null,
    error: false
  },
  mutations: {
    GET_SYSTEM_TASKS (state: any, payload: any): void {
      state.systemTasks = payload
    },
    ERROR (state: any, payload: boolean) {
      state.error = payload
    }
  },
  actions: {
    async getSystemTasks ({ commit, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/systemtask'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation :'bearer'+data.token
        })

        commit('GET_SYSTEM_TASKS', res.data.systemtasks)
        commit('ERROR', false)
      } catch (e) {
        commit('ERROR', true)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    async postSystemTasks ({ commit }, data: any) {
      const url = data.url + '/api.php/systemtask/' + data.task
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'post',
          url: url

          // authorisation:'bearer' +data.token
        })
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  }
}
export default systemTaskModule
