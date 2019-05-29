import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as LogsFormatter from '../../Globals/GlobalHelfers/LogsFormatter'
import Tabs from '../ReusableLayout/Tabs/Tabs'
import LogFile from './LogFile/LogFile'
import Card from '../ReusableLayout/Card/Card'
const formatter = LogsFormatter.default.prototype
@Component({ components: { Tabs, LogFile, Card } })
class Logs extends Vue {
  @(namespace('storage').State) current!: any
  @(namespace('logsModule').State) logs!: any
  @(namespace('logsModule').State) loading!: any
  @(namespace('logsModule').State) error!: any
  @(namespace('logsModule').Action) getLogFiles!: any
  @(namespace('logsModule').Action) getLogForFile!: any
  @(namespace('logsModule').State) log!: any
  public component: any = ''
  public content: Array<String> = []
  private selected = -1
  async mounted () {
    await this.getLogFiles(this.current)
  }
  public async loadContent (data) {
    this.component = LogFile
    await this.getLogForFile(Object.assign(this.current, { log: data }))
    this.content = this.log
  }
  public warning (el: string) {
    return formatter.bootstrapType(el)
  }
  public get logsComputed () {
    return this.logs ? this.logs.logs : []
  }
  async showLog (data) {
    this.selected = this.logs.logs.findIndex(e => e === data)
    await this.getLogForFile(Object.assign(this.current, { log: data }))
    this.content = this.log
  }
}
export default Logs
