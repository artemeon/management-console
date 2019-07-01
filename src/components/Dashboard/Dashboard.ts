import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Card from '../ReusableLayout/Card/Card.vue'
import Modal from '../ReusableLayout/Modal/Modal.vue'
import Export from '../../Globals/Storage/Export'
import ImportFile from '../../Globals/Storage/ImportFile'
import Server from '../../Globals/Storage/Server'
@Component({ components: { Modal, Card } })
class Dashboard extends Vue {
  @(namespace('storage').Action) setServer!: any
  @(namespace('storage').Action) setServers!: any
  @(namespace('storage').Action) getServers!: any
  @(namespace('storage').Action) deleteServer!: any
  @(namespace('storage').Action) setCurrent!: any
  @(namespace('storage').Action) checkServer!: any
  @(namespace('storage').Action) updateServer!: any
  @(namespace('storage').State) storageLocal!: any
  @(namespace('storage').State) current: any
  @(namespace('storage').State) checkError: any
  private id = 'modalTopBar'
  private openDialog = 'modalDeleteSystem'
  private updateId = 'modalUpdateSystem'
  private deleteDialog = 'Delete System ?'
  private systemToDelete!: Server
  private systemToUpdate!: Server
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
  goToAgp (system: Server) {
    window.open(system.url, '_blank')
  }
  async addSystem () {
    let server: Server = { title: '', url: '', token: '' }
    this.agpAdd.map(el => {
      switch (el.id.toUpperCase()) {
        case 'TITLE':
          {
            server.title = el.value
          }
          break
        case 'URL':
          server.url = el.value

          break
        case 'TOKEN':
          server.token = el.value

          break
      }
    })

    if (server.title !== '' && server.url !== '' && server.token !== '') {
      await this.checkServer(server)
      if (this.checkError === false) this.setServer(server)
    }
  }
  setDelete (data) {
    this.systemToDelete = data
  }
  deleteSystem () {
    this.deleteServer(this.systemToDelete)
  }
  setUpdate (data: Server) {
    this.systemToUpdate = data
    this.agpAdd.map(el => {
      switch (el.id.toUpperCase()) {
        case 'TITLE':
          {
            el.value = data.title
          }
          break
        case 'URL':
          el.value = data.url

          break
        case 'TOKEN':
          el.value = data.token

          break
      }
    })
  }
  async updateSystem () {
    let server: Server = { title: '', url: '', token: '' }
    this.agpAdd.map(el => {
      switch (el.id.toUpperCase()) {
        case 'TITLE':
          {
            server.title = el.value
          }
          break
        case 'URL':
          server.url = el.value

          break
        case 'TOKEN':
          server.token = el.value

          break
      }
    })

    if (server.title !== '' && server.url !== '' && server.token !== '') {
      await this.checkServer(server)

      if (this.checkError === false) {
        this.updateServer({ server: this.systemToUpdate, update: server })
      }
    }
  }
}
export default Dashboard
