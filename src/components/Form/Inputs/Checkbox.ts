import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class Checkbox extends Vue {
  @Prop() label!: string
  @Prop() id!: string
  @Prop() name!: string
  @Prop() values!: any
  //   @Prop() readonly!: boolean
  //   @Prop() disabled: boolean = false
}
export default Checkbox
