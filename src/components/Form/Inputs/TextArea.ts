import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class TextArea extends Vue {
  @(namespace('storage').State) current!: any
  @Prop() label!: string
  @Prop() id!: string
  @Prop() placeholder!: string
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  @Prop() mandatory!: boolean
  @Prop() value!: any
  private inputText = null
  created () {
    this.inputText = this.value
  }
  updateVal () {
    this.$emit('input', this.inputText)
  }
}

export default TextArea
