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
    else return true
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
}
export default InstallerHelfer
