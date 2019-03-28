import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class InstallPackages extends Vue {
  @Prop(String) url!: String
  @(namespace('installPackagesModule').State) packages!: any
  @(namespace('installPackagesModule').Getter) installed!: any
  @(namespace('installPackagesModule').Getter) notInstalled!: any
  @(namespace('installPackagesModule').Getter) withSampleContent!: any
  @(namespace('installPackagesModule').Getter) hasUpdate!: any
  @(namespace('installPackagesModule').State) samples!: any
  @(namespace('installPackagesModule').State) packagesError!: Boolean
  @(namespace('installPackagesModule').Action) getAllPackages!: any
  @(namespace('installPackagesModule').Action) getSampleContent!: any
  @(namespace('installPackagesModule').Action) getNextModule!: any
  private wait: Boolean = false
  public modules = null
  public showInstalled () {
    console.log(this.modules, 'installed', this.installed)
    this.modules = this.installed
  }
  public showNotInstalled () {
    this.modules = this.notInstalled
  }
  public showWithSampleContent () {
    console.log(this.withSampleContent)
    this.modules = this.withSampleContent
  }
  public showHasUpdate () {
    this.modules = this.hasUpdate
  }
  public showAll () {
    this.modules = this.packages
  }
  async mounted () {
    this.wait = true
    await this.getAllPackages({ url: this.url })

    await this.getSampleContent({ url: this.url })
    this.wait = false
  }
  beforeDestroy () {
    console.log('destroyed')
  }
  hasSampleContent (module) {
    let found = []
    if (this.samples) {
      found = this.samples.filter(el => {
        return el.title.toUpperCase() === module.title.toUpperCase()
      })
    }

    return found[0]
  }
  public startInstaller () {
    this.getNextModule({ url: this.url })
  }
}
export default InstallPackages
