import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import store from '@/store'
@Component
class Module extends Vue {
  @(namespace('storage').State) current: any
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
  public filter: string = ''
  // public modules = null

  public showInstalled () {
    // console.log(this.modules, 'installed', this.installed)
    // this.modules = this.installed
    this.filter = 'INSTALLED'
  }
  public showNotInstalled () {
    // this.modules = this.notInstalled
    this.filter = 'NOTINSTALLED'
  }
  public showWithSampleContent () {
    // console.log(this.withSampleContent)
    // this.modules = this.withSampleContent
    this.filter = 'SAMPLECONTENT'
  }
  public showHasUpdate () {
    // this.modules = this.hasUpdate
    this.filter = 'HASUPDATE'
  }
  public showAll () {
    // this.modules = this.packages
    this.filter = 'ALL'
  }
  public modules () {
    switch (this.filter) {
      case 'INSTALLED':
        return this.installed
      case 'NOTINSTALLED':
        return this.notInstalled
      case 'HASUPDATE':
        return this.hasUpdate
      case 'SAMPLECONTENT':
        return this.withSampleContent
      case 'ALL':
        return this.packages
      default:
        return this.packages
    }
  }
  async mounted () {
    this.wait = true
    await this.getAllPackages({ url: this.current.url })

    await this.getSampleContent({ url: this.current.url })
    this.wait = false
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
    this.getNextModule(this.current)
  }

  public informations (data) {
    const ar = []

    const array = Object.keys(data).map(i => {
      ar.push({ key: i, value: data[i] })
    })

    return ar
  }
}
export default Module
