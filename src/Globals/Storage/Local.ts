import { Storage } from './Storage'
import Server from './Server'
import { ServersList } from '../Types'
import Toastr from '../Toastr/Toastr'
class Local implements Storage {
  private jsonData!: ServersList
  /**
   * returns an Array of Servers from Localstorage
   */
  getServers (): Array<Server> {
    let temp = JSON.parse(window.localStorage.getItem('mc_server_cfg') || '{}')
    let result =
      typeof temp.systems === 'object' ? temp.systems : JSON.parse(temp.systems)

    return result
  }
  /**
   * adds a server to the localStorage
   * @param server
   */
  addServer (server: Server): void {
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
      Toastr.prototype.success(server.title + ' was added successfully')
    }
  }
  /**
   * overrides property mc_server_cfg in localstorage with a new array of servers
   * @param servers
   */
  setServers (servers: Array<Server>) {
    this.jsonData = { systems: servers }

    window.localStorage.setItem('mc_server_cfg', JSON.stringify(this.jsonData))
  }
  /**
   * deletes server from localstorage
   * @param server
   */
  deleteServer (server: Server) {
    const servers = this.getServers()
    let index = servers.findIndex(e => e.title === server.title)
    if (index !== -1 && servers.length > 0) {
      servers.splice(index, 1)
      Toastr.prototype.success(server.title + ' was deleted successfully')
    }
    this.setServers(servers)
  }
}

export default Local
