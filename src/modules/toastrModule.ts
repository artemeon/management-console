import * as toasterClass from '../Globals/Toastr/Toastr'
const Toastr = toasterClass.default.prototype
const toaster = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    successToast ({}, data: string) {
      Toastr.success(data)
    },
    warningToast ({}, data: string) {
      Toastr.warning(data)
    },
    errorToast ({}, data: string) {
      Toastr.error(data)
    },
    infoToast ({}, data: string) {
      Toastr.info(data)
    }
  },
  getters: {}
}
export default toaster
