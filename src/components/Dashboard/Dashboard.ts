import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
// import Card from '../ReusableLayout/Card/Card.vue'
import Modal from '../ReusableLayout/Modal/Modal.vue'
import Export from '../../Globals/Storage/Export'
import ImportFile from '../../Globals/Storage/ImportFile'
import Server from '../../Globals/Storage/Server'
@Component({ components: { Modal } })
class Dashboard extends Vue {
  @(namespace('storage').Action) setServer!: any
  @(namespace('storage').Action) setServers!: any
  @(namespace('storage').Action) getServers!: any
  @(namespace('storage').Action) setCurrent!: any
  @(namespace('storage').State) storageLocal!: any
  @(namespace('storage').State) current: any
  private id = 'modalTopBar'
  public agpAdd = [
    {
      id: 'Title',
      label: 'Title',
      type: 'TextField',
      value: ''
    },
    {
      id: 'Url',
      label: 'Url',
      placeholder: 'https://localhost/agpExample',
      type: 'TextField',
      value: ''
    },
    {
      id: 'Token',
      label: 'Token',
      type: 'TextField',
      value: ''
    }
  ]
  mounted () {
    this.getServers()
  }
  getSelected (system: Server) {
    this.setCurrent(system)
    this.$router.push({ name: 'inside', params: { system: system.title } })
  }
  exportJson () {
    Export.prototype.download(
      JSON.stringify(this.storageLocal),
      'systems.json',
      'application/json'
    )
  }
  async importJson () {
    let me = this
    ImportFile.prototype.readText(this.$refs.myFiles, function (e) {
      me.setServers(e.target.result)
    })
  }
  addSystem () {
    var server: Server = { title: '', url: '', token: '' }
    this.agpAdd.map(el => {
      switch (el.id.toUpperCase()) {
        case 'TITLE':
          server.title = el.value

          break
        case 'URL':
          server.url = el.value

          break
        case 'TOKEN':
          server.token = el.value

          break
      }
    })
    this.setServer(server)
  }
}
export default Dashboard
