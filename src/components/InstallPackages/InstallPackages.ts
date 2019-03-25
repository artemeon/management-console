import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class InstallPackages extends Vue {
  @Prop(String) url!: String
  @(namespace('installPackagesModule').State) packages!: any
  @(namespace('installPackagesModule').State) samples!: any
  @(namespace('installPackagesModule').State) packagesError!: Boolean
  @(namespace('installPackagesModule').Action) getAllPackages!: any
  @(namespace('installPackagesModule').Action) getSampleContent!: any
  @(namespace('installPackagesModule').Action) getNextModule!: any
  private wait: Boolean = false

  async mounted () {
    console.log('mounted')
    this.wait = true
    await this.getAllPackages({ url: this.url })
    console.log(this.url)
    await this.getSampleContent({ url: this.url })
    this.wait = false
    console.log(this.packages, this.wait)
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
