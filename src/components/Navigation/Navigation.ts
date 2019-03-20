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
    console.log('title', this.title, 'url', this.url, 'token', this.token)
    this.jsonData = { title: this.title, url: this.url, token: this.token }
    window.localStorage.setItem(this.title, JSON.stringify(this.jsonData))
    this.refresh()
    this.dialog = false
  }
  /**
   * Since not working with state, we need to refresh : Temporary
   */
  public refresh () {
    var values = []
    this.items = []
    var keys = Object.keys(localStorage)
    var i = keys.length

    while (i--) {
      if (
        localStorage.getItem(keys[i]) &&
        localStorage.getItem(keys[i]) !== 'SILENT'
      ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])))
      }
    }
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
