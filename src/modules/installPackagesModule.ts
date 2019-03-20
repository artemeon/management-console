import axios from 'axios'

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
    async getAllPackages ({ commit, dispatch }) {
      try {
        const res = await axios({
          method: 'get',
          url:
            'https://dev.artemeon.de/agp/installer.php?channel=api&step=getModuleList'
        })

        commit('GET_PACKAGES', Object.values(res.data))
        // dispatch('sortedByRequire')
      } catch (e) {
        console.log(e)
        commit('ERROR_PACKAGES', true)
      }
    },
    // trying to find a solution for the installation getNext snd triggerNext
    // sortedByRequire ({ dispatch, state }) {
    //   const sortedByRequireLength = state.packages.sort((a, b) => {
    //     // console.log(a.requires.length, b.requires.length)
    //     return Object.keys(a.requires).length - Object.keys(b.requires).length
    //   })
    //   // first element to install is system : requires []
    //   console.log('sortedByRequireLength 1 ', sortedByRequireLength)
    //   // second element to Install : all Modules that require system and nothing else
    //   const requireFirstElement = sortedByRequireLength.filter(el => {
    //     const data = Object.keys(el.requires)
    //     const index = data.findIndex(
    //       el => el.toUpperCase() == sortedByRequireLength[0].title.toUpperCase()
    //     )
    //     return index !== -1 && Object.values(el.requires).length === 1
    //   })
    //   const requireByElement = sortedByRequireLength.filter(el => {
    //     const data = Object.keys(el.requires)
    //     const index = data.findIndex(
    //       el => el.toUpperCase() == 'prozessverwaltung'.toUpperCase()
    //     )
    //     return index !== -1
    //     // && Object.values(el.requires).length === 1
    //   })
    //   const returnElementByTitle = sortedByRequireLength.filter(el => {
    //     console.log(el.title)
    //     return el.title.toUpperCase() == 'confirmation'.toUpperCase()
    //   })
    //   console.log('requireFirstElement', requireByElement)
    // },
    /**
     * Versuch 2
     */
    // getNextModule ({ dispatch, state }) {
    //   const packages = state.packages
    //   console.log(notAllInstalled(packages))

    //   if (notAllInstalled(packages)) {
    //     packages.map(module => {
    //       if (isInstallable(module) === true) {
    //         if (requireInstalled(module.requires, state.packages) === true) {
    //           // dispatch('triggerNextModule', { module: module.title })
    //         } else return
    //       }
    //     })
    //     // dispatch('getNextModule')
    //   }
    // },
    // async triggerNextModule ({ commit, state }, param: String) {
    //   try {
    //     const res = await axios({
    //       method: 'post',
    //       url:
    //         'https://dev.artemeon.de/agp/installer.php?channel=api&step=triggerInstallerApi',
    //       data: {
    //         module: param.module
    //       }
    //     })

    //     console.log(res)
    //   } catch (e) {
    //     console.log(e)
    //     // commit('ERROR_PACKAGES', true)
    //   }
    // }
    /**
     * Versuch 3
     */
    async getNextModule ({ dispatch, state }) {
      const packages = Object.values(state.packages)
      // console.log('notAllInstalled', allInstalled(packages))
      if (allInstalled(packages) === false) {
        packages.forEach(async element => {
          // if (!element.isInstallable || !element.providesInstaller) {
          //   var index = Object.values(packages).indexOf(element)
          //   if (index > -1) {
          //     // packages.splice(index, 1)
          //     console.log('test')
          //   }
          // } else
          if (element.isInstallable && element.providesInstaller) {
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
        if (!sampleContentInstalled(modulesInstalledWithSampleContent)) {
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
function isInstallable (module) {
  if (module.versionInstalled) return false
  else return true
}
function allInstalled (packages) {
  var found = true
  Object.values(packages).map(el => {
    if (el.isInstallable === true) found = false
  })
  return found
}
function sampleContentInstalled (packages) {
  var found = true
  packages.map(el => {
    if (el.samplecontent.isInstalled === true) found = false
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
