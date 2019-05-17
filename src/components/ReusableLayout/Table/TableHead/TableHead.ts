import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class TableHead extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  thStyle = {
    ...defaultStyles,
    ...this.styles
  }
}
export default TableHead
