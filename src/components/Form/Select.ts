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

  @Prop() item!: any
  public selected!: any
  created () {
    if (typeof this.values === 'object') {
      console.log(this.name, typeof this.values, this.values)
      this.selected = this.values[this.value]
    } else {
      console.log('else', this.value)
      this.selected = this.value
    }
  }
  updateVal () {
    this.$emit('input', this.selected)
    console.log('value', this.selected, this.item.value)
  }
}
export default Select
