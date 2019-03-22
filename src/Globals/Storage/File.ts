import { Storage } from './Storage'
class File implements Storage {
  getServers () {
    throw new Error('Method not implemented.')
  }
  setServer (server: object): void {
    throw new Error('Method not implemented.')
  }
}
export default File
