import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Modal from '../ReusableLayout/Modal/Modal'
@Component({ components: { Modal } })
class Systemtask extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('systemTaskModule').State) systemTasks!: any
  @(namespace('systemTaskModule').Action) getSystemTasks!: any
  @(namespace('systemTaskModule').Action) getForm!: any
  @(namespace('systemTaskModule').State) form: any
  async mounted () {
    await this.getSystemTasks(this.current)
  }
  private objectToArray (data: Object) {
    var arr = []

    if (!Array.isArray(data) && data) {
      const array = Object.keys(data).map((i, k) => {
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
  private runtask (task) {
    this.$store.commit('systemTaskModule/GET_FORM', {})
    this.getForm(Object.assign(this.current, { task: task }))
  }
}

export default Systemtask
