import axios from 'axios'
import * as helfers from '../Globals/InstallerHelfers/InstallerHelfer'
const installPackagesModule = {
  namespaced: true,
  state: {
    packages: null,
    packagesError: false
  },
  mutations: {
    GET_PACKAGES (state: any, payload: any): void {
      state.packages = payload
    },
    ERROR_PACKAGES (state: any, payload: boolean): void {
      state.packagesError = payload
    }
  },
  actions: {
    /**
     *
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
        // dispatch('sortedByRequire')
      } catch (e) {
        console.log(e)
        commit('ERROR_PACKAGES', true)
      }
    },

    async getNextModule ({ dispatch, state }) {
      const packages = Object.values(state.packages)

      if (allInstalled(packages) === false) {
        packages.forEach(async element => {
          if (
            helfers.default.prototype.isInstallable(element) &&
            element.providesInstaller
          ) {
            return dispatch('triggerNextModule', element.title)
          }
        })
        await dispatch('getAllPackages')
        await dispatch('getNextModule')
      } else {
        // filter modules : which one has samplecontent
        const modulesInstalledWithSampleContent = packages.filter(
          el => el.versionInstalled !== null && !Array.isArray(el.samplecontent)
        )

        // sort modules by samplecontent alphabetically

        modulesInstalledWithSampleContent.sort(function (a, b) {
          var textA = a.samplecontent.name
            .substring(a.samplecontent.name.lastIndexOf('\\') + 1)
            .toUpperCase()
          var textB = b.samplecontent.name
            .substring(b.samplecontent.name.lastIndexOf('\\') + 1)
            .toUpperCase()
          return textA < textB ? -1 : textA > textB ? 1 : 0
        })

        // console.log(modulesInstalledWithSampleContent)
        // samplecontent not all installed then install
        if (
          !helfers.default.prototype.sampleContentInstalled(
            modulesInstalledWithSampleContent
          )
        ) {
          // const filtered = modulesInstalledWithSampleContent.filter(
          //   el => el.samplecontent.isInstalled === false
          // )

          modulesInstalledWithSampleContent.forEach(async element => {
            if (!element.samplecontent.isInstalled) {
              await dispatch('triggerNextSampleContent', element.title)
            }
          })

          // dispatch('getAllPackages')
          // makeRequestsFromArray(modulesInstalledWithSampleContent)
          dispatch('getAllPackages')
        } else {
          console.log('else sample content')
        }
      }
    },
    /**
     * @param payload Name of Module that will be installed
     */
    async triggerNextModule ({ dispatch, state }, payload: string) {
      try {
        const res = await axios({
          method: 'post',
          url:
            'https://dev.artemeon.de/agp/installer.php?channel=api&step=triggerInstallerApi',
          data: {
            module: payload
          }
        })
      } catch (e) {
        console.log(e)
        //  commit('ERROR_PACKAGES', true)
      }
    },
    async triggerNextSampleContent ({ commit, dispatch }, payload: string) {
      console.log('payload', payload)
      try {
        const res = await axios({
          method: 'post',
          url:
            'https://dev.artemeon.de/agp/installer.php?channel=api&step=triggerSampleApi',
          data: {
            module: payload
          }
        })
        console.log('module finished or not ', payload, res)
        if (res.data.status === 'success') {
          dispatch('getAllPackages')
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {}
}
function requireInstalled (requires, packages) {
  if (Object.keys(requires).length === 0) return true
  else {
    // console.log(Object.keys(requires), Object.values(packages))
    var allInstalled = false
    Object.keys(requires).map(data => {
      const found = Object.values(packages).findIndex(el => {
        return el.title === data && el.versionInstalled
      })
      allInstalled = found !== -1
    })
    return allInstalled
  }
}

function allInstalled (packages) {
  var found = true
  Object.values(packages).map(el => {
    if (helfers.default.prototype.isInstallable(el) === true) found = false
  })
  return found
}

// test

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
