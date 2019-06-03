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
      this.selected = this.values[this.value]
    } else {
      this.selected = this.value
    }
  }
  updateVal () {
    let result
    for (var i in this.values) {
      if (this.values[i] === this.selected) result = i
    }
    this.$emit('input', result)
  }
}
export default Select
