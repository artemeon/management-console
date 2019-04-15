import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { TextField, Radio, Checkbox, Select } from '../../Form'
@Component({ components: { TextField, Radio, Checkbox, Select } })
class Modal extends Vue {
  @(namespace('storage').State) current!: any
  @Prop() items
  @Prop() label!: string
  @Prop() header!: string
}
export default Modal
