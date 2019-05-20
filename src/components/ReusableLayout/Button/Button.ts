import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class Button extends Vue {
  @Prop({ type: Object, default: () => {} }) styles!: Object
  btnStyle = {
    ...defaultStyles,
    ...this.styles
  }
  private handler () {
    this.$emit('click')
  }
}
export default Button
