import { Module, Sample } from '../Types'
/**
 * Contains helfer functions for the installPackagesModule
 */
class InstallerHelfer {
  /**
   *
   * @param module
   * return if module has versionInstalled (not null)
   */
  public isInstallable (module: Module): Boolean {
    if (module.versionInstalled) return false
    return true
  }

  /**
   * returns true if all modules have been installed
   * @param packages : Modules
   */
  public allInstalled (packages: Array<Module>) {
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
  public allInstalledSamples (samples: Array<Sample>) {
    var found = true
    samples.map(el => {
      if (el.isInstalled === false) found = false
    })
    return found
  }
  public allUpdated (packages: Array<Module>) {
    let found = true
    packages.map(element => {
      if (
        element.versionInstalled > element.versionAvailable &&
        element.isInstallable === true
      ) {
        found = false
      }
    })
    return found
  }
}
export default InstallerHelfer
