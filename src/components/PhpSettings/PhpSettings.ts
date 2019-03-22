import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const uuidv4 = require('uuid/v1')
@Component
class PhpSettings extends Vue {
  @Prop(String) url!: String
  @(namespace('phpSettingsModule').State) phpSettings!: any
  @(namespace('phpSettingsModule').Action) getPHPSettings!: any
  private langs: Array<String> = ['de', 'en']

  async mounted () {
    console.log('just mounted', this.url)
    await this.getPHPSettings({ url: this.url })
  }
  // private get fileChecksFolder (): any {
  //   if (this.phpSettings && Object.keys(this.phpSettings.fileChecksFolder)) {
  //     // return Object.keys(this.phpSettings.fileChecksFolder)
  //     const ar = []
  //     const array = Object.keys(this.phpSettings.fileChecksFolder).map(i =>
  //       ar.push({ key: i, value: this.phpSettings.fileChecksFolder[i] })
  //     )
  //     return ar
  //   }
  // }
  private get fileChecksFolder (): any {
    if (this.phpSettings && this.phpSettings.folders) {
      const ar = []

      const array = Object.keys(this.phpSettings.folders).map((i, k) => {
        ar.push({ key: i, value: Object.values(this.phpSettings.folders)[k] })
      })

      return ar
    }
  }
  // private get fileChecksModules (): any {
  //   if (this.phpSettings && Object.keys(this.phpSettings.fileChecksModules)) {
  //     // return Object.keys(this.phpSettings.fileChecksModules)
  //     const ar = []
  //     const array = Object.keys(this.phpSettings.fileChecksModules).map(i =>
  //       ar.push({ key: i, value: this.phpSettings.fileChecksModules[i] })
  //     )
  //     return ar
  //   }
  // }
  private get fileChecksModules (): any {
    if (this.phpSettings && this.phpSettings.extensions) {
      const ar = []

      const array = Object.keys(this.phpSettings.extensions).map((i, k) => {
        ar.push({
          key: i,
          value: Object.values(this.phpSettings.extensions)[k]
        })
      })

      return ar
    }
  }
  // private get langs (): any {
  //   return ['de', 'en']
  // }
}
export default PhpSettings
