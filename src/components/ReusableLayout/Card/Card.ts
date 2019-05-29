import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const defaultStyles = {
  ' max-width': '50%',
  'min-width': '20%'
}
@Component
class Card extends Vue {
  @Prop() title!: string
  @Prop() information!: object
  @Prop({ type: Object, default: () => {} }) styles!: Object
  @Prop({ type: Boolean, default: true }) close!: Boolean
  @Prop({ type: Boolean, default: false }) clickable!: Boolean
  cardStyle = {
    ...defaultStyles,
    ...this.styles
  }
  handler () {
    this.$emit('handleClick')
  }
  handleClose () {
    this.$emit('close')
  }
}
export default Card
