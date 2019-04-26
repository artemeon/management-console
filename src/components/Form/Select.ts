import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class Select extends Vue {
  @Prop() label!: string
  @Prop() id!: string
  @Prop() name!: string
  @Prop() values!: any
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  @Prop() mandatory!: boolean
  @Prop() value!: any

  private selected = null
  created () {
    this.selected = this.value
  }
  updateVal () {
    this.$emit('input', this.selected)
  }
}
export default Select
