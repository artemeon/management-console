import { Component, Vue, Prop } from 'vue-property-decorator'
import * as LogsFormatter from '../../../Globals/GlobalHelfers/LogsFormatter'
const formatter = LogsFormatter.default.prototype
@Component
class LogFile extends Vue {
  @Prop() content: any

  public warning (el: string) {
    return formatter.bootstrapType(el)
  }

  public selected: number = -1
  public showItem (i: number) {
    if (this.selected === i) {
      this.selected = -1
    } else {
      this.selected = i
    }
  }
}

export default LogFile
