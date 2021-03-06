import axios from 'axios'
import * as helfers from '../Globals/InstallerHelfers/InstallerHelfer'
import { Module, Sample, ModulesState } from '../Globals/Types'
const helfer = helfers.default.prototype
const installPackagesModule = {
  namespaced: true,
  state: {
    packages: null,
    packagesError: false,
    samples: null
  },
  mutations: {
    GET_PACKAGES (state: ModulesState, payload: Array<Module>): void {
      state.packages = payload
    },
    GET_SAMPLE_CONTENT (state: ModulesState, payload: Array<Sample>): void {
      state.samples = payload
    },
    ERROR_PACKAGES (state: ModulesState, payload: boolean): void {
      state.packagesError = payload
    }
  },
  actions: {
    /**
     * Get all Modules
     * @param data contains system data
     */
    async getAllPackages ({ commit, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/installer/module'
      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })

        commit('GET_PACKAGES', res.data.modules)
        commit('ERROR_PACKAGES', false)
      } catch (e) {
        commit('ERROR_PACKAGES', true)
        dispatch('toast/errorToast', e.message, { root: true })
      }
      commit('status/LOADING_FALSE', {}, { root: true })
    },
    /**
     * @param data : System data
     */
    async getNextModule ({ dispatch, state, commit }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      if (helfer.allInstalled(state.packages) === false) {
        let installable = state.packages.filter(element => {
          return !element.versionInstalled && element.providesInstaller === true
        })

        installable.forEach(async element => {
          if (!element.versionInstalled && element.providesInstaller === true) {
            return dispatch(
              'triggerNextModule',
              Object.assign(data, { module: element.title })
            )
          }
        })
        await dispatch('getAllPackages', data)
        await dispatch('getNextModule', data)
      } else {
        // install sample only in full Mode

        if (data.full === true) {
          // Sample Content not installed
          if (!helfer.allInstalledSamples(state.samples)) {
            await dispatch('makeRequestsFromArray', data)
          } else {
            dispatch('getSampleContent', data)
            commit('status/LOADING_FALSE', {}, { root: true })
            console.log('ende get next Module ', Date.now().toLocaleString)
          }
        } else {
          commit('status/LOADING_FALSE', {}, { root: true })
          console.log('ende get next Module ', Date.now().toLocaleString)
        }
      }
    },
    /**
     * @param payload Name of Module that will be installed
     */
    async triggerNextModule ({ commit, dispatch, state }, data: any) {
      const url = data.url + '/api.php/installer/module'
      try {
        const res = await axios({
          method: 'post',
          url: url,
          data: {
            module: data.module
          },
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })
        if (res.data.status === 'success') {
          commit('status/INSTALLER_LOG', res.data.log, { root: true })
          commit(
            'status/SET_INFORMATION',
            res.data.module + ' successfully installed',
            {
              root: true
            }
          )
        }
      } catch (e) {
        console.log('error', e)
        // commit('ERROR_PACKAGES', true)
        dispatch('toast/errorToast', e.message, { root: true })
      }
    },
    /**
     * Get sample content (All)
     * @param data system-url and token
     */
    async getSampleContent ({ commit, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      const url = data.url + '/api.php/installer/sample'
      try {
        const res = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: 'Bearer ' + data.token
          }
        })

        commit('GET_SAMPLE_CONTENT', res.data.samples)
        commit('status/LOADING_FALSE', {}, { root: true })
      } catch (e) {}
    },
    /**
     * install sample content : recursively
     * @param vuex params
     * @param data object containing url and token of system
     */
    makeRequestsFromArray ({ commit, state, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      let index = 0
      let arr = state.samples
      let url = data.url + '/api.php/installer/sample'
      function request (): any {
        commit(
          'status/INSTALLER_LOG',
          'Installing sample content ' + arr[index].title,
          {
            root: true
          }
        )
        return axios
          .post(
            url,
            {
              module: arr[index].title
            },
            {
              headers: {
                Authorization: 'Bearer ' + data.token
              }
            }
          )
          .then(res => {
            index++
            if (index > arr.length) {
              // commit('status/LOADING_FALSE', {}, { root: true })
              commit(
                'status/INSTALLER_LOG',
                'Installation erfolgreich abgeschlossen',
                {
                  root: true
                }
              )
              return dispatch('getSampleContent', data)
            }
            return request()
          })
          .catch(e => {
            commit('status/LOADING_FALSE', {}, { root: true })
            commit('status/INSTALLER_LOG', e.message, {
              root: true
            })
            return dispatch('toast/errorToast', e.message, { root: true })
          })
      }
      request()
    },
    async updateModules ({ commit, state, dispatch }, data: any) {
      commit('status/LOADING_TRUE', {}, { root: true })
      // Not all Updated
      let update = state.packages.filter(element => {
        return (
          element.versionInstalled > element.versionAvailable &&
          element.isInstallable === true
        )
      })
      if (helfer.allUpdated(state.packages) === false) {
        update.forEach(async element => {
          if (element.providesInstaller === true && element.isInstallable) {
            dispatch('triggerNextModule', data)
          }
        })
        await dispatch('getAllPackages', data)
        await dispatch('updateModules', data)
      }

      commit('status/LOADING_FALSE', {}, { root: true })
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
            module.versionInstalled != null &&
            module.versionInstalled !== module.versionAvailable
        )
      }
    }
  }
}

export default installPackagesModule
