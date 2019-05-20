import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class ASwitch extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  @Prop({ type: String, default: 'left option' }) left!: String
  @Prop({ type: String, default: 'right option' }) right!: String
  switchStyle = {
    ...defaultStyles,
    ...this.styles
  }
  private checkTest: boolean = false
  private handle () {
    this.$emit('change', this.checkTest)
  }
}
export default ASwitch
