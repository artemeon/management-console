import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import PhpSettings from '../PhpSettings/PhpSettings.vue'
import DbSettings from '../DbSettings/DbSettings.vue'
@Component({
  components: { PhpSettings, DbSettings }
  })
class Navigation extends Vue {
  @(namespace('storageModule').Action) setServer!: any
  @(namespace('storageModule').Action) getServers!: any
  private items = []
  public title: string = ''
  public url: string = ''
  public token: string = ''
  private mounted () {
    this.refresh()
  }
  // temporary
  public dialog: boolean = false
  public open = []
  public jsonData: Object = ''
  public active = []

  /**
   * Saves Title, Url and Token of a single system in local Storage
   */
  public saveToLocalStorage () {
    this.setServer({ title: this.title, url: this.url, token: this.token })
    this.refresh()
    this.dialog = false
  }
  /**
   * Since not working with state, we need to refresh : Temporary
   */
  public refresh () {
    if (JSON.parse(window.localStorage.getItem('mc_server_cfg'))) {
      var values = JSON.parse(window.localStorage.getItem('mc_server_cfg'))
        .systems
      this.items = []

      values.map(value => {
        this.items.push({
          name: value.title,
          id: value.title,
          children: [
            {
              name: value.title + 'System',
              id: 'System',
              vueInformations: {
                system: value.title,
                component: 'PhpSettings',
                url: value.url
              }
            },
            {
              name: value.title + 'Database',
              id: 'Database',
              vueInformations: {
                system: value.title,
                component: 'DbSettings',
                url: value.url
              }
            },
            {
              name: value.title + 'Install',
              id: 'Install',
              vueInformations: {
                system: value.title,
                component: 'Install',
                url: value.url
              }
            },
            {
              name: value.title + 'Logs',
              id: 'Logs',
              vueInformations: {
                system: value.title,
                component: 'Logs',
                url: value.url
              }
            }
          ]
        })
      })
    }
  }
  /**
   * Which Submenu has been selected : Computed
   */
  public get selected () {
    if (!this.active.length) return undefined

    const id = this.active[0]

    const item = this.items.find(item =>
      item.children.find(el => el.name === id)
    )
    const found = item.children.find(el => el.name === id)
    console.log(found)
    return found
    // return this.items.find(item => item.id === id)
  }
}

export default Navigation
