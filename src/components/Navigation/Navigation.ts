import { Component, Vue } from 'vue-property-decorator'

@Component
class Navigation extends Vue {
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
    const local = window.localStorage.getItem('mc_server_cfg')
    console.log(local)
    if (local) {
      this.jsonData = JSON.parse(local)
      this.jsonData.systems.push({
        title: this.title,
        url: this.url,
        token: this.token
      })
    } else {
      this.jsonData = {
        systems: [{ title: this.title, url: this.url, token: this.token }]
      }
    }
    window.localStorage.setItem('mc_server_cfg', JSON.stringify(this.jsonData))
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
              name: value.title + 'config',
              id: 'config'
            },
            {
              name: value.title + 'install',
              id: 'install'
            },
            {
              name: value.title + 'Logs',
              id: 'logs'
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
    return found
    // return this.items.find(item => item.id === id)
  }
}

export default Navigation
