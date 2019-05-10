class Import {
  private reader: any
  checkFileAPI () {
    if (File && FileReader && FileList && Blob) {
      this.reader = new FileReader()
      return true
    } else {
      alert(
        'The File APIs are not fully supported by your browser. Fallback required.'
      )
      return false
    }
  }

  /**
   * read text input
   */
  readText (filePath, callback) {
    this.checkFileAPI()
    var output = '' // placeholder for text output

    if (filePath.files && filePath.files[0]) {
      this.reader.onload = callback
      this.reader.readAsText(filePath.files[0])
    }
  }
}

export default Import
