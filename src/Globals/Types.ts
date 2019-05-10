import Server from './Storage/Server'

interface Module {
  title: string
  description: string
  versionAvailable: string
  author: string
  requires: object
  path: string
  providesInstaller: boolean
  versionInstalled: string
  isInstallable: boolean
}
interface Sample {
  title: String
  class: string
  isInstallable: Boolean
  isInstalled: Boolean
}
interface ModulesState {
  packages: Array<Module>
  packagesError: Boolean
  samples: Array<Sample>
}
// interface DbBrowserState {
//   dbTables: Object
//   tableData: Object
// }
interface RootState {}
interface ServersList {
  systems?: Array<Server>
}
export { Module, Sample, ModulesState, ServersList, RootState }
