import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class Radio extends Vue {
  @Prop() label!: string
  @Prop() id!: string
  @Prop() name!: string
  @Prop() values!: any
  @Prop() value: any
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  public checkItem = null
  created () {
    this.checkItem = this.value
  }
  updateVal () {
    this.$emit('input', this.checkItem)
  }
}
export default Radio
