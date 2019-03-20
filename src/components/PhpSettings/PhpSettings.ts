import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const uuidv4 = require('uuid/v1')
@Component
class PhpSettings extends Vue {
  @(namespace('phpSettingsModule').State) phpSettings!: any
  @(namespace('phpSettingsModule').Action) getPHPSettings!: any
  private langs: Array<String> = ['de', 'en']

  async mounted () {
    await this.getPHPSettings()
    console.log(
      'phpSettings in Component',
      this.phpSettings,
      typeof this.phpSettings
    )
  }
  private get fileChecksFolder (): any {
    if (this.phpSettings && Object.keys(this.phpSettings.fileChecksFolder)) {
      // return Object.keys(this.phpSettings.fileChecksFolder)
      const ar = []
      const array = Object.keys(this.phpSettings.fileChecksFolder).map(i =>
        ar.push({ key: i, value: this.phpSettings.fileChecksFolder[i] })
      )
      return ar
    }
  }
  private get fileChecksModules (): any {
    if (this.phpSettings && Object.keys(this.phpSettings.fileChecksModules)) {
      // return Object.keys(this.phpSettings.fileChecksModules)
      const ar = []
      const array = Object.keys(this.phpSettings.fileChecksModules).map(i =>
        ar.push({ key: i, value: this.phpSettings.fileChecksModules[i] })
      )
      return ar
    }
  }
  // private get langs (): any {
  //   return ['de', 'en']
  // }
}
export default PhpSettings
