import { Storage } from './Storage'
class Cloud implements Storage {
  getServers () {
    throw new Error('Method not implemented.')
  }
  addServer (server: object): void {
    throw new Error('Method not implemented.')
  }
}
export default Cloud
