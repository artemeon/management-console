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
  public getIcon (el: string) {
    let result = this.warning(el)
    if (result === undefined) result = ''
    return formatter.getIcon(result)
  }
  public close () {
    this.isActive = false
    this.$emit('return')
  }

  public update () {
    this.isActive = true
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
