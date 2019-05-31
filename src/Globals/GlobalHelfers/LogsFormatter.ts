class LogsFormatter {
  public bootstrapType (logString: string) {
    if (logString.length > 0) {
      if (logString.indexOf('WARNING') !== -1) {
        return 'warning'
      } else if (logString.indexOf('ERROR') !== -1) {
        return 'danger'
      } else {
        return 'info'
      }
    }
  }
  public getIcon (type: string) {
    switch (type) {
      case 'warning': {
        return '<i class="fas fa-exclamation-triangle"></i>'
      }

      case 'danger':
        {
          return '<i class="fas fa-exclamation-triangle"></i>'
        }
        break
      case 'info': {
        return '<i class="fas fa-exclamation-circle"></i>'
      }
    }
  }
}
export default LogsFormatter
