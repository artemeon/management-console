import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class Base extends Vue {
  @(namespace('storage').Action) setServer!: any
  @(namespace('storage').Action) getServers!: any
  @(namespace('storage').Action) setCurrent!: any
  @(namespace('storage').State) storageLocal!: any
  public current = null
  mounted () {
    this.getServers()
    this.current = this.storageLocal[0] || {}
    this.setCurrent(this.current)
  }
  getSelected () {
    this.setCurrent(this.current)
    this.$router.push({ path: '/' })
  }
}
export default Base
