class LogsFormatter {
  public bootstrapType (logString: string) {
    if (logString.indexOf('WARNING') !== -1) {
      return 'alert-warning'
    } else if (logString.indexOf('ERROR') !== -1) {
      return 'alert-danger'
    } else {
      return 'alert-info'
    }
  }
}
export default LogsFormatter
