import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class TableCell extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  tcStyle = {
    ...defaultStyles,
    ...this.styles
  }
}
export default TableCell
