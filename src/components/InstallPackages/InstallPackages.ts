import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class InstallPackages extends Vue {
  @(namespace('installPackagesModule').State) packages!: any
  @(namespace('installPackagesModule').Action) getAllPackages!: any
  @(namespace('installPackagesModule').Action) getNextModule!: any
  private wait: Boolean = false

  async mounted () {
    this.wait = true

    await this.getAllPackages()

    this.wait = false
  }
  private startInstaller () {
    this.getNextModule()
  }
}
export default InstallPackages
