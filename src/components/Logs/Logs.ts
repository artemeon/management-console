import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as LogsFormatter from '../../Globals/GlobalHelfers/LogsFormatter'
const formatter = LogsFormatter.default.prototype
@Component
class Logs extends Vue {
  @Prop(String) url!: String

  @(namespace('logsModule').State) logs!: any
  @(namespace('logsModule').State) loading!: any
  @(namespace('logsModule').State) error!: any
  @(namespace('logsModule').Action) getLogs!: any

  public warning (el: string) {
    return formatter.bootstrapType(el)
  }
  public selected: number = -1

  async mounted () {
    await this.getLogs({ url: this.url })
  }
  public showItem (i: number) {
    if (this.selected === i) {
      this.selected = -1
    } else {
      this.selected = i
    }
  }
}
export default Logs
