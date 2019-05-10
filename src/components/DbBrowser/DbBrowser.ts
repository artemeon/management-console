import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Index, DbTables, TableData } from './Interfaces'

@Component
// ({ components: { Row, Col } })
class DbBrowser extends Vue {
  // @Prop(String) url!: String
  @(namespace('dbBrowserModule').State) dbTables: any
  @(namespace('dbBrowserModule').Action) listTables: any
  @(namespace('dbBrowserModule').State) tableData: any
  @(namespace('dbBrowserModule').Action) detailTable: any
  @(namespace('dbBrowserModule').Action) addIndexToDb: any
  @(namespace('dbBrowserModule').Action) deleteIndexFromDb: any
  @(namespace('dbBrowserModule').Action) recreateIndexDb: any
  @(namespace('storage').State) current: any
  // @(namespace('Loader').Action) StopLoader: any
  // private dbTables: DbTables = {} as DbTables
  public selectedTable: string = ''
  // private tableData: TableData = {} as TableData

  // get tables List fron the Api when the Component did mount
  public async mounted () {
    await this.listTables({ url: this.current.url })
  }

  public async getSelectedTable (): Promise<void> {
    // this.StartLoader()
    await this.detailTable({ url: this.current.url, table: this.selectedTable })
    console.log('tableData', this.tableData)
    // this.StopLoader()
  }
  // set the selected table and get the data from the Api
  public setSelectedTable (table: string): void {
    this.selectedTable = table
    this.getSelectedTable()
  }

  public async addIndex (column: string): Promise<void> {
    // this.StartLoader()
    await this.addIndexToDb({
      url: this.current.url,
      table: this.selectedTable,
      column: column
    })
    // this.StopLoader()
  }
  // delete the selected dbIndex
  public async deleteIndex (index: Index): Promise<void> {
    // this.StartLoader()
    await this.deleteIndexFromDb({
      url: this.current.url,
      table: this.selectedTable,
      index: index
    })
    // this.StopLoader()
  }

  // recreate index
  public async recreateIndex (index: Index): Promise<void> {
    // this.StartLoader()
    await this.recreateIndexDb({
      url: this.current.url,
      table: this.selectedTable,
      index: index
    })

    // this.StopLoader()
  }
  // checks if the key is in indexes
  public isIndex (key: string): boolean {
    var found = false
    this.tableData.indexes.map(index => {
      if (index.description === key) {
        return (found = true)
      }
    })
    return found
  }
}

export default DbBrowser
