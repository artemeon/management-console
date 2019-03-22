import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class DbSettings extends Vue {
  @(namespace('dbSettingsModule').State) dbSettings!: any
  @(namespace('dbSettingsModule').State) checkModule!: any
  @(namespace('dbSettingsModule').Action) postDbSettings!: any
  @(namespace('dbSettingsModule').Action) checkDbModule!: any

  private dbDriver: String = ''
  private dbServer: String = ''
  private dbUser: String = ''
  private dbPassword: String = ''
  private dbName: String = ''
  private dbPort: String = ''
  private found: boolean = true
  public drivers = [
    'MySQL',
    'MariaDB',
    'PostgreSQL',
    'SQLite 3',
    'Oracle (oci8)',
    'MSSQL(sqlsrv)'
  ]
  private async postDbsettings (): Promise<any> {
    this.postDbSettings({
      username: this.dbUser,
      dbname: this.dbName,
      password: this.dbPassword,
      hostname: this.dbServer,
      driver: this.dbDriver,
      port: this.dbPort,
      write: true
    })
  }
  private async switchDriver (): Promise<any> {
    await this.checkDbModule({ dbDriver: this.dbDriver })
  }
  mounted () {}
}
export default DbSettings
