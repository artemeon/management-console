import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
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
  @(namespace('installPackagesModule').Action) updateModules!: any

  public installationMode: string = 'full'
  public full: boolean = true
  public filter: string = ''
  public style = {
    height: '150px',
    'overflow-y': 'auto'
  }
  public scrolled: string = ''

  public handle (e) {
    if (e === true) this.full = true
    else this.full = false
    console.log(e, this.full)
  }
  public showInstalled () {
    this.filter = 'INSTALLED'
  }
  public showNotInstalled () {
    this.filter = 'NOTINSTALLED'
  }
  public showWithSampleContent () {
    this.filter = 'SAMPLECONTENT'
  }
  public showHasUpdate () {
    this.filter = 'HASUPDATE'
  }
  public showAll () {
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
  handleScroll (e) {
    if (e.target.scrollTop === 0) {
      this.scrolled = ''
    } else {
      this.scrolled = 'scrolled'
    }
  }
  async mounted () {
    if (this.current) {
      await this.getAllPackages(this.current)
      await this.getSampleContent(this.current)
    }
  }
  created () {}
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
    this.getNextModule(Object.assign(this.current, { full: this.full }))
  }
  public update () {
    this.updateModules(Object.assign(this.current, { full: this.full }))
  }
  public informations (data) {
    let ar: object[] = []
    const array = Object.keys(data).map(i => {
      ar.push({ key: i, value: data[i] })
    })

    return ar
  }
  public showUpdateBtn () {
    return (
      this.hasUpdate &&
      this.hasUpdate !== null &&
      this.hasUpdate.length &&
      this.hasUpdate.length > 0
    )
  }
}
export default Module
