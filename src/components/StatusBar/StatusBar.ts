import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class StatusBar extends Vue {
  @(namespace('status').State) loading!: any
  @(namespace('status').State) information!: any
  @(namespace('status').State) installerLog!: any
  public system!: String
  private show: boolean = false
  private empty = 'Keine Protokolle '
  public test = [
    'Cheese' + new Date().toLocaleString(),
    'Pepperoni' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString(),
    'Black Olives' + new Date().toLocaleString()
  ]

  created () {
    if (this.$route.params.system) {
      this.system = this.$route.params.system
    }
  }
  toggleShow () {
    this.show = !this.show
  }
}
export default StatusBar
