import * as toastr from 'toastr'
class Toastr {
  initToaster () {
    toastr.options.showEasing = 'swing'
    toastr.options.hideEasing = 'linear'
    toastr.options.closeEasing = 'linear'
    toastr.options.closeButton = true
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.options.closeMethod = 'fadeOut'
    toastr.options.closeDuration = 300
    toastr.options.closeEasing = 'swing'
  }
  success (data: string) {
    this.initToaster()
    toastr.success(data)
  }
  warning (data: string) {
    this.initToaster()
    toastr.warning(data)
  }
  error (data: string) {
    this.initToaster()
    toastr.error(data)
  }
  info (data: string) {
    this.initToaster()
    toastr.info(data)
  }
}

export default Toastr
