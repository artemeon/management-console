import { Storage } from './Storage'
import Server from './Server'
import { ServersList } from '../Types'
class Local implements Storage {
  private jsonData!: ServersList
  getServers (): Array<Server> {
    let temp = JSON.parse(window.localStorage.getItem('mc_server_cfg') || '{}')
    let result =
      typeof temp.systems === 'object' ? temp.systems : JSON.parse(temp.systems)

    return result
  }
  setServer (server: Server): void {
    if (server.title !== '' && server.url !== '' && server.token !== '') {
      let local = window.localStorage.getItem('mc_server_cfg')

      if (local !== undefined && local !== null) {
        this.jsonData = typeof local !== 'object' ? JSON.parse(local) : local

        let systems =
          typeof this.jsonData.systems !== 'object' &&
          this.jsonData.systems !== undefined
            ? JSON.parse(this.jsonData.systems)
            : this.jsonData.systems
        this.jsonData.systems = systems
        if (this.jsonData.systems) {
          this.jsonData.systems.push({
            title: server.title,
            url: server.url,
            token: server.token
          })
        }
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
  setServers (servers: Array<Server>) {
    this.jsonData = { systems: servers }

    window.localStorage.setItem('mc_server_cfg', JSON.stringify(this.jsonData))
  }
  deleteServer (server: Server) {
    const servers = this.getServers()
    let index = servers.findIndex(e => e.title === server.title)
    if (index !== -1 && servers.length > 0) {
      servers.splice(index, 1)
    }
    this.setServers(servers)
  }
}

export default Local
