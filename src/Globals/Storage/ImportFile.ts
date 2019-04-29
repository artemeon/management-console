class Import {
  private reader: any
  checkFileAPI () {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
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
    } // end if html5 filelist support
    // else if (ActiveXObject && filePath) {
    //   // fallback to IE 6-8 support via ActiveX
    //   try {
    //     this.reader = new ActiveXObject('Scripting.FileSystemObject')
    //     var file = this.reader.OpenTextFile(filePath, 1) // ActiveX File Object
    //     output = file.ReadAll() // text contents of file
    //     file.Close() // close file "input stream"
    //     // displayContents(output);
    //     console.log(output)
    //   } catch (e) {
    //     if (e.number == -2146827859) {
    //       alert(
    //         'Unable to access local files due to browser security settings. ' +
    //           'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' +
    //           'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'
    //       )
    //     }
    //   }
    // }
    else {
      // this is where you could fallback to Java Applet, Flash or similar
      //   return false
    }

    // return output
  }
}

export default Import
