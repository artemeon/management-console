import { Storage } from './Storage'
import Server from './Server'
class Local implements Storage {
  private jsonData!: object
  getServers (): Array<Server> {
    let temp = JSON.parse(window.localStorage.getItem('mc_server_cfg') || '{}')
    let result =
      typeof temp.systems === 'object' ? temp.systems : JSON.parse(temp.systems)

    return result
  }
  setServer (server: Server): void {
    console.log('server', server)
    if (server.title !== '' && server.url !== '' && server.token !== '') {
      let local = window.localStorage.getItem('mc_server_cfg')
      console.log(local)
      if (local !== undefined && local !== null) {
        this.jsonData = typeof local !== 'object' ? JSON.parse(local) : local
        let systems =
          typeof this.jsonData.systems !== 'object'
            ? JSON.parse(this.jsonData.systems)
            : this.jsonData.systems
        this.jsonData.systems = systems
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
      console.log('set Server ', JSON.stringify(this.jsonData))
    }
  }
  setServers (servers: Array<Server>) {
    this.jsonData = { systems: servers }
    console.log(this.jsonData)
    window.localStorage.setItem('mc_server_cfg', JSON.stringify(this.jsonData))
  }
}

export default Local
