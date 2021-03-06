import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as LogsFormatter from '../../Globals/GlobalHelfers/LogsFormatter'
import Tabs from '../ReusableLayout/Tabs/Tabs'
import LogFile from './LogFile/LogFile'
import Card from '../ReusableLayout/Card/Card'
import SideBar from '../ReusableLayout/SideBar/SideBar'
const formatter = LogsFormatter.default.prototype
@Component({ components: { Tabs, LogFile, Card, SideBar } })
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
    if (this.current) {
      await this.getLogFiles(this.current)
    }
  }

  public warning (el: string) {
    return formatter.bootstrapType(el)
  }
  public get logsComputed () {
    if (this.logs) {
      return Object.values(this.logs.logs)
    }
  }
  handleReturn () {
    this.selected = -1
  }
  async showLog (data) {
    this.content = []
    this.selected = this.logs.logs.findIndex(e => e === data)
    await this.getLogForFile(Object.assign(this.current, { log: data }))
    this.content = this.log.lines
  }
}
export default Logs
