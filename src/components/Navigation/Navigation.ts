import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import PhpSettings from '../PhpSettings/PhpSettings.vue'
import DbSettings from '../DbSettings/DbSettings.vue'
import Installer from '../InstallPackages/InstallPackages.vue'

@Component({
  components: { PhpSettings, DbSettings, Installer }
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
  // test
  public tree = [
    {
      text: 'Dogs',
      nodes: [
        {
          text: 'Germany',
          nodes: [
            {
              text: 'American Eskimo Dog',
              nodes: [
                {
                  text: 'Fluffy',
                  type: 'link',
                  value:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Eskimo_Dog_1.jpg/1920px-American_Eskimo_Dog_1.jpg'
                }
              ]
            },
            {
              text: 'Bavarian Mountain Hound'
            },
            {
              text: 'Boxer',
              nodes: [
                {
                  text: 'Rip (Router-link)',
                  type: 'router-link',
                  value: 'd-ger-boxer-rip' // This is the name of the route
                },
                {
                  text: 'Mackenzie (Router-link)',
                  type: 'router-link',
                  value: 'd-ger-boxer-machenzie' // This is the name of the route
                }
              ]
            },
            {
              text: 'Bullenbeisser'
            },
            {
              text: 'Dachshund'
            },
            {
              text: 'Deutsche Bracke',
              nodes: [
                {
                  text: 'Mini',
                  type: 'link',
                  value:
                    'https://animalsbreeds.com/wp-content/uploads/2015/07/Deutsche-Bracke.jpg'
                }
              ]
            }
          ]
        },
        {
          text: 'France',
          nodes: [
            {
              text: 'Ariegeois'
            },
            {
              text: 'Artois Hound'
            },
            {
              text: 'Barbet'
            },
            {
              text: 'Beagle-Harrier'
            },
            {
              text: 'Beauceron'
            },
            {
              text: 'Berger Picard'
            },
            {
              text: 'Bloodhound'
            }
          ]
        }
      ]
    },
    {
      text: 'Cats',
      nodes: [
        {
          text: 'Russia',
          nodes: [
            {
              text: 'Donskoy'
            },
            {
              text: 'Kurilian Bobtail'
            },
            {
              text: 'Mekong Bobtail'
            },
            {
              text: 'Siberian'
            }
          ]
        },
        {
          text: 'Thailand',
          nodes: [
            {
              text: 'Khao Manee'
            },
            {
              text: 'Korat'
            },
            {
              text: 'Korn Ja'
            },
            {
              text: 'Suphalak',
              nodes: [
                {
                  text: 'Moon',
                  type: 'link',
                  value:
                    'https://www.pets4homes.co.uk/images/articles/4198/what-is-a-suphalak-cat-5947aefcd4845.jpg'
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  // test
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
