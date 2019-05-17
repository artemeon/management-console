import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class Table extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  tableStyle = {
    ...defaultStyles,
    ...this.styles
  }
}
export default Table
