import axios from 'axios'

import * as toastr from 'toastr'
const toaster = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    showToast ({}, data) {
      toastr.options.showEasing = 'swing'
      toastr.options.hideEasing = 'linear'
      toastr.options.closeEasing = 'linear'
      toastr.options.closeButton = true
      toastr.options.positionClass = 'toast-top-left'
      toastr.options.timeOut = 0
      toastr.options.extendedTimeOut = 0

      toastr.success(data)
      console.log(toastr, data)
    }
  },
  getters: {}
}
export default toaster
