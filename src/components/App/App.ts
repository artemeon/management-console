import { Component, Vue } from 'vue-property-decorator'

import Base from '../Base/Base'

import StatusBar from '../StatusBar/StatusBar'
import SideBar from '../ReusableLayout/SideBar/SideBar'
import navContent from '../../assets/Json/SideNav.json'
import { namespace } from 'vuex-class'
@Component({ components: { Base, StatusBar, SideBar } })
export default class App extends Vue {
  public content = navContent
}
