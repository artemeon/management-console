import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as LogsFormatter from '../../../Globals/GlobalHelfers/LogsFormatter'
import Card from '@/components/ReusableLayout/Card/Card'
const formatter = LogsFormatter.default.prototype
@Component({ components: { Card } })
class LogFile extends Vue {
  @Prop() content: any
  public isActive: Boolean = false
  public warning (el: string) {
    return formatter.bootstrapType(el)
  }
  close () {
    this.isActive = false
  }
  @Watch('content')
  onContentChanged (val: any) {
    if (val !== null) this.isActive = true
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
