import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Modal from '../ReusableLayout/Modal/Modal'
import SideBar from '../ReusableLayout/SideBar/SideBar'
@Component({ components: { Modal, SideBar } })
class Systemtask extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('systemTaskModule').State) systemTasks!: any
  @(namespace('systemTaskModule').Action) getSystemTasks!: any
  @(namespace('systemTaskModule').Action) getForm!: any
  @(namespace('systemTaskModule').State) form: any
  async mounted () {
    if (this.current) {
      await this.getSystemTasks(this.current)
    }
  }
  handleClick (e) {
    console.log(e)
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
  private runtask (task: any) {
    console.log(task)
    this.$store.commit('systemTaskModule/GET_FORM', {})
    this.getForm({ server: this.current, task: task })
  }
}

export default Systemtask
