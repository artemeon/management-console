import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Index, DbTables, TableData } from './Interfaces'
import SideBar from '../ReusableLayout/SideBar/SideBar'
@Component({ components: { SideBar } })
class DbBrowser extends Vue {
  @(namespace('dbBrowserModule').State) dbTables: any
  @(namespace('dbBrowserModule').Action) listTables: any
  @(namespace('dbBrowserModule').State) tableData: any
  @(namespace('dbBrowserModule').Action) detailTable: any
  @(namespace('dbBrowserModule').Action) addIndexToDb: any
  @(namespace('dbBrowserModule').Action) deleteIndexFromDb: any
  @(namespace('dbBrowserModule').Action) recreateIndexDb: any
  @(namespace('storage').State) current: any
  public selectedTable: string = ''

  // get tables List fron the Api when the Component did mount
  public async mounted () {
    if (this.current) {
      await this.listTables(this.current)
    }
  }

  public async getSelectedTable (): Promise<void> {
    await this.detailTable(
      Object.assign(this.current, { table: this.selectedTable })
    )
  }
  // set the selected table and get the data from the Api
  public setSelectedTable (table: any): void {
    console.log(table)
    this.selectedTable = table
    this.getSelectedTable()
  }

  public async addIndex (column: string): Promise<void> {
    await this.addIndexToDb(
      Object.assign(this.current, {
        table: this.selectedTable,
        column: column
      })
    )
  }
  // delete the selected dbIndex
  public async deleteIndex (index: Index): Promise<void> {
    await this.deleteIndexFromDb(
      Object.assign(this.current, {
        table: this.selectedTable,
        index: index
      })
    )
  }

  // recreate index
  public async recreateIndex (index: Index): Promise<void> {
    await this.recreateIndexDb(
      Object.assign(this.current, {
        table: this.selectedTable,
        index: index
      })
    )
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
