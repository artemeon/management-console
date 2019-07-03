import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class StatusBar extends Vue {
  @(namespace('status').State) loading!: any
  @(namespace('status').State) information!: any
  @(namespace('status').State) installerLog!: any
  public system: String = ''
  private show: boolean = false
  public lang: string = ''
  private empty = 'Keine Protokolle '

  handleLang () {
    console.log('before', this.$i18n.locale)
    if (this.$i18n.locale === 'en') {
      this.lang = 'de'
      this.$i18n.locale = 'de'
    } else {
      this.lang = 'en'
      this.$i18n.locale = 'en'
    }
  }
  created () {
    if (this.$route.params.system) {
      this.system = this.$route.params.system
    }
    this.lang = this.$i18n.locale
  }
  toggleShow () {
    this.show = !this.show
    if (this.show === true) {
      let obj = this.$el.querySelector('#logger')

      if (obj && obj !== undefined) {
        this.$set(obj, 'scrollTop', obj.scrollHeight)
      }
    }
  }
  htmlTag (str) {
    return str.includes('<') && str.includes('>')
  }
}
export default StatusBar
