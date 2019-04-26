import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { TextField, Radio, Checkbox, Select } from '../../Form'
@Component({
  components: {
  FormentryText: TextField,
  FormentryCheckbox: Checkbox,
  FormentryCheckboxarray: Checkbox,
  FormentryDropdown: Select,
  TextField,
  Radio,
  Checkbox,
  Select
  }
  })
class Modal extends Vue {
  @(namespace('storage').State) current!: any
  @Prop() items
  @Prop() label!: string
  @Prop() header!: string
  @Prop() id!: string
  private exists (item): boolean {
    return item in this.$options.components
  }
  private execute () {
    console.log(this.items)
  }
}
export default Modal
