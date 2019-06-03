import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { TextField, Radio, Checkbox, Select } from '../../Form'
@Component({
  components: {
  KajonaSystemAdminFormentriesFormentryText: TextField,
  KajonaSystemAdminFormentriesFormentryCheckbox: Checkbox,
  KajonaSystemAdminFormentriesFormentryCheckboxarray: Checkbox,
  KajonaSystemAdminFormentriesFormentryDropdown: Select,
  TextField,
  Radio,
  Checkbox,
  Select
  }
  })
class FormContainer extends Vue {
  @(namespace('storage').State) current!: any
  @Prop() items
  @Prop() label!: string
  @Prop() header!: string
  @Prop() id!: string
  @Prop() handler

  private exists (item): boolean {
    if (this.$options.components) return item in this.$options.components
    return false
  }

  execute () {
    this.handler()
  }
}
export default FormContainer
