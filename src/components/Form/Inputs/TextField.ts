import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class TextField extends Vue {
  @(namespace('storage').State) current!: any
  @Prop() label!: string
  @Prop() id!: string
  @Prop() placeholder!: string
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  @Prop() mandatory!: boolean
  @Prop() value!: any
  private inputText: String = ''
  created () {
    this.inputText = this.value
  }
  /**
   * watch input value changes
   * @param inputValue
   */
  @Watch('value')
  change (inputValue) {
    this.inputText = inputValue
  }
  updateVal () {
    this.$emit('input', this.inputText)
  }
}

export default TextField
