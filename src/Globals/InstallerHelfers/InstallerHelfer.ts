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

  public allInstalled (packages) {
    var found = true
    packages.map(el => {
      if (el.versionInstalled === null && el.providesInstaller === true) { found = false }
    })
    return found
  }

  public allInstalledSamples (samples) {
    var found = true
    samples.map(el => {
      if (el.isInstalled === false) found = false
    })
    return found
  }
}
export default InstallerHelfer
