import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const uuidv4 = require('uuid/v1')
@Component
class PhpSettings extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('phpSettingsModule').State) phpSettings!: any
  @(namespace('phpSettingsModule').Action) getPHPSettings!: any
  private langs: Array<String> = ['de', 'en']

  async mounted () {
    await this.getPHPSettings({ url: this.current.url })
  }

  private get fileChecksFolder (): any {
    if (this.phpSettings && this.phpSettings.folders) {
      let ar: object[] = []

      const array = Object.keys(this.phpSettings.folders).map((i, k) => {
        ar.push({ key: i, value: Object.values(this.phpSettings.folders)[k] })
      })

      return ar
    }
  }
  private get fileChecksModules (): any {
    if (this.phpSettings && this.phpSettings.extensions) {
      let ar: object[] = []

      Object.keys(this.phpSettings.extensions).map((i, k) => {
        ar.push({
          key: i,
          value: Object.values(this.phpSettings.extensions)[k]
        })
      })

      return ar
    }
  }
  private get phpVersion (): String {
    return this.phpSettings ? this.phpSettings.version.actual : ''
  }
  // private get langs (): any {
  //   return ['de', 'en']
  // }
}
export default PhpSettings
