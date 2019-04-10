import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class StatusBar extends Vue {
  @(namespace('status').State) loading!: any
}
export default StatusBar
