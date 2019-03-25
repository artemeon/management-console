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
    },
    /**
     * Get sample content system-url and token
     * @param data
     */
    async getSampleContent ({ commit, dispatch }, data: any) {
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
        console.log(e)
      }
    },
    /**
     *
     * @param data : System Url and token
     */
    async getNextModule ({ dispatch, state }, data: any) {
      // Not all Modules installed
      console.log(helfer.allInstalled(state.packages), 'all Installed')
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
        // filter modules : which one has samplecontent
        // const modulesInstalledWithSampleContent = packages.filter(
        //   el => el.versionInstalled !== null && !Array.isArray(el.samplecontent)
        // )

        // sort modules by samplecontent alphabetically

        // modulesInstalledWithSampleContent.sort(function (a, b) {
        //   var textA = a.samplecontent.name
        //     .substring(a.samplecontent.name.lastIndexOf('\\') + 1)
        //     .toUpperCase()
        //   var textB = b.samplecontent.name
        //     .substring(b.samplecontent.name.lastIndexOf('\\') + 1)
        //     .toUpperCase()
        //   return textA < textB ? -1 : textA > textB ? 1 : 0
        // })

        // console.log(modulesInstalledWithSampleContent)
        // samplecontent not all installed then install
        // if (
        //   !helfers.default.prototype.sampleContentInstalled(
        //     modulesInstalledWithSampleContent
        //   )
        // ) {
        // const filtered = modulesInstalledWithSampleContent.filter(
        //   el => el.samplecontent.isInstalled === false
        // )

        // modulesInstalledWithSampleContent.forEach(async element => {
        //   if (!element.samplecontent.isInstalled) {
        //     await dispatch('triggerNextSampleContent', element.title)
        //   }
        // })

        // dispatch('getAllPackages')
        // makeRequestsFromArray(modulesInstalledWithSampleContent)
        // dispatch('getAllPackages')
        // } else {
        // console.log('else sample content')
        // }

        // Sample Content not installed
        if (!helfer.allInstalledSamples(state.samples)) {
          // Promise.all(
          //   state.samples.map(sample => {
          //     console.log('sample content not installed', sample.title)
          //     dispatch('triggerNextSampleContent', {
          //       url: data.url,
          //       module: sample.title
          //     })
          //   })
          // )
          await dispatch('makeRequestsFromArray', data)
          dispatch('getSampleContent', data)

          console.log('sample content')
        } else {
          console.log('sample content  installed')
        }
      }
    },
    /**
     * @param payload Name of Module that will be installed
     */
    async triggerNextModule ({ dispatch, state }, payload: any) {
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
        console.log(e)
        //  commit('ERROR_PACKAGES', true)
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

        console.log(res)
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
  getters: {}
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
