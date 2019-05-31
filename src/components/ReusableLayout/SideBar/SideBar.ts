import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
class SideBar extends Vue {
  @Prop() elements!: Array<String>
  mounted () {
    console.log(this.elements)
  }
  handler (element) {
    this.$emit('indexClicked', element)
  }
}
export default SideBar
