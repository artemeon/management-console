import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class Card extends Vue {
  @Prop() title!: string
  @Prop() information!: object
  handler () {
    this.$emit('handleClick')
  }
}
export default Card
