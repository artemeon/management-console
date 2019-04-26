import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class Checkbox extends Vue {
  @Prop() label!: string
  @Prop() id!: string
  @Prop() name!: string
  @Prop() values!: any
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  @Prop() value: any
  public checkItem = null
  created () {
    this.checkItem = this.value
  }
  updateVal () {
    this.$emit('input', this.checkItem)
  }
}
export default Checkbox
