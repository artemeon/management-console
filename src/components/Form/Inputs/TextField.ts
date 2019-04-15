import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class Modal extends Vue {
  @(namespace('storage').State) current!: any
  @Prop() label!: string
  @Prop() id!: string
  @Prop() placeholder!: string
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  @Prop() mandatory!: boolean
}
export default Modal
