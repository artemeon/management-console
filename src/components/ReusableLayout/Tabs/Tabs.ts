import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
class Tabs extends Vue {
  @Prop() headers: any
  @Prop() loadContent: any
  @Prop() component: any
  @Prop() content: any
  public activetab: number = -1
  mounted () {
    console.log(this.headers)
  }
  handler (data, index: number) {
    this.activetab = index
    this.loadContent(data)
  }
}
export default Tabs
