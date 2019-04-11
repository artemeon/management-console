import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class StatusBar extends Vue {
  @(namespace('status').State) loading!: any
  public expanded: boolean = false
  public expandClass = 'navbar fixedbottom'
  public expand () {
    this.expanded = !this.expanded
    if (this.expanded === true) {
      this.expandClass = 'navbar fixedbottom expanded'
    } else {
      this.expandClass = 'navbar fixedbottom'
    }
  }
}
export default StatusBar
