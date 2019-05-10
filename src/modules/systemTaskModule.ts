import * as Local from '../Globals/Storage/Local'
import Server from '../Globals/Storage/Server'
import axios from 'axios'
const systemTaskModule = {
  namespaced: true,
  state: {
    systemTasks: null,
    error: false,
    form: null
  },
  mutations: {
    GET_SYSTEM_TASKS (state: any, payload: any): void {
      state.systemTasks = payload
    },
    ERROR (state: any, payload: boolean) {
      state.error = payload
    },
    GET_FORM (state: any, payload: any): void {
      state.form = payload
    }
  },
  actions: {
    /**
     *
     * @param vuex params
     * @param data
     * get all available System tasks
     */
    async getSystemTasks ({ commit, dispatch }, data: Server) {
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
    /**
     *
     * @param vuex params
     * @param data
     * returns form entries for a given system task
     */
    async getForm ({ commit }, data: any) {
      const url = data.server.url + '/api.php/systemtask/' + data.task
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'get',
          url: url

          // authorisation:'bearer' +data.token
        })
        let result = formatTypes(res.data)
        console.log(result)
        commit('GET_FORM', result)
      } catch (e) {
        // Error handling not yet
        console.log(e)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    /**
     *
     * @param param0
     * @param data server and object with selected values in the form
     * executes a systemtask
     */
    async executeTask ({ commit }, data: any) {
      const url = data.url + '/api.php/systemtask/' + data.task
      commit('status/LOADING_TRUE', {}, { root: true })
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: data.payload
          // authorisation:'bearer' +data.token
        })
        // @TODO handle success
      } catch (e) {
        // Error handling not yet
        console.log(e)
        // @TODO handle error
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    }
  }
}
function formatTypes (form: any): any {
  form.fields.forEach(element => {
    element.type = element.type.substring(
      element.type.lastIndexOf('\\') + 1,
      element.type.length
    )
  })
  return form
}
export default systemTaskModule
