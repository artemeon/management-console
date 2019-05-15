import { Component, Vue } from 'vue-property-decorator'

import Base from '../Base/Base'
import Modal from '../ReusableLayout/Modal/Modal.vue'
import StatusBar from '../StatusBar/StatusBar'
import SideBar from '../ReusableLayout/SideBar/SideBar'
import navContent from '../../assets/Json/SideNav.json'
import { namespace } from 'vuex-class'
import Dashboard from '../Dashboard/Dashboard'
@Component({ components: { Base, StatusBar, SideBar, Modal, Dashboard } })
export default class App extends Vue {
  @(namespace('storage').State) current: any
  @(namespace('lock').Action) checkIfLocked!: any
  public content = navContent
  mounted () {
    if (!this.current) this.$router.push({ path: '/' })
    if (this.current) {
      this.checkIfLocked(this.current)
    }
  }
}
