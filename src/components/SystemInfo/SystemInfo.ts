import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ChartJs from '../ReusableLayout/ChartJs/ChartJs'
@Component({ components: { ChartJs } })
class SystemInfo extends Vue {
  @(namespace('storage').State) current!: any
  @(namespace('systemInfo').State) systemInfo!: any
  @(namespace('systemInfo').Action) getSystemInfo!: any
  @(namespace('status').State) loading!: any
  mounted () {
    if (this.current) {
      this.getSystemInfo(this.current)
    }
  }
}
export default SystemInfo
