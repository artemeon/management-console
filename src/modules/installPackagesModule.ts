import axios from 'axios'
import * as helfers from '../Globals/InstallerHelfers/InstallerHelfer'
const helfer = helfers.default.prototype
const installPackagesModule = {
  namespaced: true,
  state: {
    packages: null,
    packagesError: false,
    samples: null
  },
  mutations: {
    GET_PACKAGES (state: any, payload: any): void {
      state.packages = payload
    },
    GET_SAMPLE_CONTENT (state: any, payload: any): void {
      state.samples = payload
    },
    ERROR_PACKAGES (state: any, payload: boolean): void {
      state.packagesError = payload
    }
  },
  actions: {
    /**
     * Get all Modules
     * @param data contains system-url and token
     */
    async getAllPackages ({ commit, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/installer/module'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation :'bearer'+data.token
        })

        commit('GET_PACKAGES', res.data.modules)
        commit('ERROR_PACKAGES', false)
      } catch (e) {
        commit('ERROR_PACKAGES', true)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    /**
     *
     * @param data : System Url and token
     */
    async getNextModule ({ dispatch, state, commit }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      // Not all Modules installed
      console.log('all installed', helfer.allInstalled(state.packages))
      if (helfer.allInstalled(state.packages) === false) {
        // filter already installed
        let installable = state.packages.filter(element => {
          return !element.versionInstalled && element.providesInstaller === true
        })

        installable.forEach(async element => {
          if (!element.versionInstalled && element.providesInstaller === true) {
            return dispatch('triggerNextModule', {
              url: data.url,
              module: element.title
            })
          }
        })
        await dispatch('getAllPackages', data)
        await dispatch('getNextModule', data)
      }
      // all Modules Installed
      else {
        // install sample only in full Mode
        if (data.full === true) {
          // Sample Content not installed
          if (!helfer.allInstalledSamples(state.samples)) {
            await dispatch('makeRequestsFromArray', data)
            // dispatch('getSampleContent', data)
          } else {
            dispatch('getSampleContent', data)
            console.log('finish')
          }
        }
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    /**
     * @param payload Name of Module that will be installed
     */
    async triggerNextModule ({ commit, dispatch, state }, payload: any) {
      const url = payload.url + '/api.php/installer/module'
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: {
            module: payload.module
          }
        })
        if (res.data.status === 'success') {
          commit('status/INSTALLER_LOG', res.data.log, { root: true })
        }
      } catch (e) {
        console.log('error', e)
        // commit('ERROR_PACKAGES', true)
      }
    },
    /**
     * Get sample content system-url and token
     * @param data
     */
    async getSampleContent ({ commit, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/installer/sample'
      try {
        const res = await axios({
          method: 'get',
          url: url
          // Authorisation:'bearer'+data.token
        })

        commit('GET_SAMPLE_CONTENT', res.data.samples)
        // commit('ERROR_PACKAGES', false)
      } catch (e) {
        // commit('ERROR_PACKAGES', true)
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    makeRequestsFromArray ({ commit, state, dispatch }, data) {
      commit('status/LOADING_FALSE', {}, { root: true })
      let index = 0
      let arr = state.samples
      let url = data.url + '/api.php/installer/sample'
      function request (): any {
        return axios
          .post(url, {
            module: arr[index].title
          })
          .then(res => {
            index++
            if (index >= arr.length) {
              commit('status/LOADING_TRUE', {}, { root: true })
              return dispatch('getAllPackages', data)
            }
            return request()
          })
      }
      request()
      // commit('status/LOADING_TRUE', {}, { root: true })
      // return
    }
  },
  getters: {
    installed: state => {
      if (state.packages) {
        return state.packages.filter(
          module =>
            (module.versionInstalled === null &&
              module.providesInstaller === false) ||
            module.versionInstalled !== null
        )
      }
    },
    notInstalled: state => {
      if (state.packages) {
        return state.packages.filter(
          module =>
            module.versionInstalled === null &&
            module.providesInstaller === true
        )
      }
    },
    withSampleContent: state => {
      if (state.packages && state.samples) {
        return state.packages.filter(module => {
          return (
            state.samples.findIndex(sample => sample.title === module.title) !==
            -1
          )
        })
      }
    },
    hasUpdate: state => {
      if (state.packages) {
        return state.packages.filter(
          module =>
            module.versionInstalled &&
            module.versionInstalled !== module.versionAvailable
        )
      }
    }
  }
}

export default installPackagesModule
