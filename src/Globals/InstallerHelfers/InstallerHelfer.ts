/**
 * Contains helfer functions for the installPackagesModule
 */
class InstallerHelfer {
  /**
   *
   * @param module
   * return if module has versionInstalled (not null)
   */
  public isInstallable (module): Boolean {
    if (module.versionInstalled) return false
    return true
  }
  /**
   *
   * @param packages array of Modules
   * true if all sampleContents have been installed
   */
  public sampleContentInstalled (packages): Boolean {
    var found = true
    packages.map(el => {
      if (el.samplecontent.isInstalled === true) found = false
    })
    return found
  }
  /**
   * returns true if all modules have been installed
   * @param packages : Modules
   */
  public allInstalled (packages) {
    var found = true
    packages.map(el => {
      if (el.versionInstalled === null && el.providesInstaller === true) {
        found = false
      }
    })
    return found
  }
  /**
   * returns true if all entries have been installed
   * @param samples array with sample content
   */
  public allInstalledSamples (samples) {
    var found = true
    samples.map(el => {
      if (el.isInstalled === false) found = false
    })
    return found
  }
  public allUpdated (packages) {
    let found = true
    packages.map(el => {
      if (el.versionInstalled !== el.versionAvailable) {
        found = false
      }
    })
    return found
  }
}
export default InstallerHelfer
