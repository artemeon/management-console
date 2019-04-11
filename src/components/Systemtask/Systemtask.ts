import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class Systemtask extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('systemTaskModule').State) systemTasks!: any
  @(namespace('systemTaskModule').Action) getSystemTasks!: any
  @(namespace('systemTaskModule').Action) postSystemTasks!: any
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
    this.postSystemTasks(Object.assign(this.current, { task: task }))
  }
}

export default Systemtask
