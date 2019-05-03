import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Modal from '../ReusableLayout/Modal/Modal.vue'
import Export from '../../Globals/Storage/Export'
import ImportFile from '../../Globals/Storage/ImportFile'
import Local from '../../Globals/Storage/Local'
import Server from '../../Globals/Storage/Server'
@Component({ components: { Modal } })
class Base extends Vue {
  @(namespace('storage').Action) setServer!: any
  @(namespace('storage').Action) setServers!: any
  @(namespace('storage').Action) getServers!: any
  @(namespace('storage').Action) setCurrent!: any
  @(namespace('storage').State) storageLocal!: any
  @(namespace('lock').State) locked!: any
  @(namespace('lock').Action) checkIfLocked!: any
  @(namespace('lock').Action) lockSystem!: any
  @(namespace('lock').Action) unlockSystem!: any
  private id = 'modalTopBar'
  public current = null
  public systems!: any
  public agp_add = [
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

    this.current = this.storageLocal[0] || {}
    this.setCurrent(this.current)
    this.checkIfLocked(this.current)
  }
  getSelected () {
    this.setCurrent(this.current)
    this.$router.push({ path: '/' })
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
    this.agp_add.map(el => {
      switch (el.id.toUpperCase()) {
        case 'TITLE': {
          server.title = el.value
          console.log(server)
        }
        case 'URL': {
          server.url = el.value
        }
        case 'TOKEN': {
          server.token = el.value
        }
      }
    })
    console.log('server', server)
    this.setServer(server)
  }
  lock () {
    this.lockSystem(this.current)
  }
  unlock () {
    this.unlockSystem(this.current)
  }
}
export default Base
