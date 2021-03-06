import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class DbSettings extends Vue {
  @(namespace('storage').State) current: any

  @(namespace('dbSettingsModule').State) dbSettings!: any
  @(namespace('dbSettingsModule').State) checkModule!: any
  @(namespace('dbSettingsModule').Action) postDbSettings!: any
  @(namespace('dbSettingsModule').Action) checkDbModule!: any

  private dbDriver: string = ''
  private dbServer: string = ''
  private dbUser: string = ''
  private dbPassword: string = ''
  private dbName: string = ''
  private dbPort: string = ''
  private found: boolean = true
  public disable: boolean = false
  private async postDbsettings (e): Promise<any> {
    e.preventDefault()

    this.postDbSettings(
      Object.assign(this.current, {
        database: {
          username: this.dbUser,
          dbname: this.dbName,
          password: this.dbPassword,
          hostname: this.dbServer,
          driver: this.dbDriver,
          port: this.dbPort
        }
      })
    )
  }
  public async switchDriver () {
    let driver = this.dbDriver
    this.found = this.checkModule[driver]
  }
  async mounted () {
    if (this.current) {
      await this.checkDbModule(this.current)
    }
    if (this.checkModule.config) {
      this.dbServer = this.checkModule.config.host
      this.dbUser = this.checkModule.config.username
      this.dbName = this.checkModule.config.database
      this.dbPort = this.checkModule.config.port
      this.disable = true
    }
  }

  enable () {
    console.log('enable')
    this.disable = false
  }
}
export default DbSettings
