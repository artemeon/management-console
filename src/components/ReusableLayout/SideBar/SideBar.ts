import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class SideBar extends Vue {
  @Prop() content!: any
  @(namespace('storage').State) current!: any
  public eventname: string = ''

  handler (e) {
    // @TODO handle reload
    if (this.current) {
      const url = this.current.url
      this.$router.push({ name: e, params: { system: this.current.title } })
    }
  }
}
export default SideBar
