import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class TableBody extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  tbodyStyle = {
    ...defaultStyles,
    ...this.styles
  }
}
export default TableBody
