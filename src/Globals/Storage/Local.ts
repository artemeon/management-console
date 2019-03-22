import { Storage } from './Storage'
import Server from './Server'
class Local implements Storage {
  private jsonData!: object
  getServers (): Array<Server> {
    let result = JSON.parse(
      window.localStorage.getItem('mc_server_cfg') || '{}'
    )
    return result.systems || []
  }
  setServer (server: Server): void {
    if (server.title !== '' && server.url !== '' && server.token !== '') {
      let local = window.localStorage.getItem('mc_server_cfg')
      if (local) {
        this.jsonData = JSON.parse(local)
        this.jsonData.systems.push({
          title: server.title,
          url: server.url,
          token: server.token
        })
      } else {
        this.jsonData = {
          systems: [
            { title: server.title, url: server.url, token: server.token }
          ]
        }
      }
      window.localStorage.setItem(
        'mc_server_cfg',
        JSON.stringify(this.jsonData)
      )
    }
  }
}

export default Local
