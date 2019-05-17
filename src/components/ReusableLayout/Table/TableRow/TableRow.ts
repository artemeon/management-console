import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class TableRow extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  trStyle = {
    ...defaultStyles,
    ...this.styles
  }
}
export default TableRow
