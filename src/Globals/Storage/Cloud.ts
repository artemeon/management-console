import { Storage } from './Storage'
class Cloud implements Storage {
  getServers () {
    throw new Error('Method not implemented.')
  }
  setServer (server: object): void {
    throw new Error('Method not implemented.')
  }
}
export default Cloud
