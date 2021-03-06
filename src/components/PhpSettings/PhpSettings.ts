import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
// import Card from '../ReusableLayout/Card/Card'

const uuidv4 = require('uuid/v1')
// @Component({ components: { Card } })
@Component
class PhpSettings extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('phpSettingsModule').State) phpSettings!: any
  @(namespace('phpSettingsModule').Action) getPHPSettings!: any
  private langs: Array<String> = ['de', 'en']
  private style = {
    'max-height': '50%',
    'overflow-y': 'auto'
  }
  async mounted () {
    if (this.current) {
      await this.getPHPSettings(this.current)
    }
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
}
export default PhpSettings
