import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Modal from '../ReusableLayout/Modal/Modal'
import SideBar from '../ReusableLayout/SideBar/SideBar'
import FormContainer from '../ReusableLayout/FormContainer/FormContainer'
@Component({ components: { Modal, SideBar, FormContainer } })
class Systemtask extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('systemTaskModule').State) systemTasks!: any
  @(namespace('systemTaskModule').Action) getSystemTasks!: any
  @(namespace('systemTaskModule').Action) getForm!: any
  @(namespace('systemTaskModule').Action) executeTask!: any
  @(namespace('systemTaskModule').State) form: any
  private selected!: any

  async mounted () {
    if (this.current) {
      await this.$store.commit('systemTaskModule/GET_FORM', {})
      await this.getSystemTasks(this.current)

      this.selected = Object.keys(
        this.systemTasks[Object.keys(this.systemTasks)[0]]
      )[0]
      await this.getForm({ server: this.current, task: this.selected })
    }
  }

  private objectToArray (data: Object) {
    let arr: any[] = []

    if (!Array.isArray(data) && data) {
      Object.keys(data).map((i, k) => {
        arr.push({
          key: i,
          value: Object.values(data)[k]
        })
      })
    }

    return arr
  }
  private get systemTasksComputed () {
    let array = this.objectToArray(this.systemTasks)
    array.forEach(el => {
      if (!Array.isArray(el.value)) el.value = this.objectToArray(el.value)
    })
    return array
  }
  private async selectTask (task: any) {
    await this.$store.commit('systemTaskModule/GET_FORM', {})

    await this.getForm({ server: this.current, task: task })
    this.selected = task
  }
  public runTask () {
    let fields = this.form.fields[0].fields
    let obj = {}
    let valuesArray = fields.map(el => {
      obj = {}
      obj[el.name] = el.value
      return obj
    })
    let payload = {
      task: this.selected,
      payload: valuesArray
    }

    this.executeTask(Object.assign(this.current, payload))
  }
}

export default Systemtask
