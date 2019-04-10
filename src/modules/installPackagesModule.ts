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
      // Not all Modules installed
      commit('status/LOADING_TRUE', {}, { root: true })
      if (helfer.allInstalled(state.packages) === false) {
        state.packages.forEach(async element => {
          if (!element.versionInstalled && element.providesInstaller) {
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
        // Sample Content not installed
        if (!helfer.allInstalledSamples(state.samples)) {
          await dispatch('makeRequestsFromArray', data)
          dispatch('getSampleContent', data)
        } else {
          console.log('sample content  installed')
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
      } catch (e) {
        commit('ERROR_PACKAGES', true)
      }
    },
    async triggerNextSampleContent ({ commit, dispatch }, payload: any) {
      let url = payload.url + '/api.php/installer/sample'
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: {
            module: payload.module
          }
        })

        // dispatch('getAllPackages')
        return res
      } catch (e) {
        console.log(e)
      }
    },
    makeRequestsFromArray ({ state, dispatch }, data) {
      let index = 0
      let arr = state.samples
      let url = data.url + '/api.php/installer/sample'
      function request () {
        return axios
          .post(url, {
            module: arr[index].title
          })
          .then(() => {
            // dispatch('getAllPackages')
            index++
            if (index >= arr.length) {
              return
            }
            return request()
          })
      }
      request()
      return dispatch('getAllPackages', data)
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

// recursive way to install sample content
function makeRequestsFromArray (arr) {
  let index = 0
  function request () {
    return axios
      .post(
        'https://dev.artemeon.de/agp/installer.php?channel=api&step=triggerSampleApi',
        {
          module: arr[index].title
        }
      )
      .then(() => {
        // dispatch('getAllPackages')
        index++
        if (index >= arr.length) {
          return
        }
        return request()
      })
  }
  return request()
}

export default installPackagesModule
