import { Component, Vue } from 'vue-property-decorator'

import Base from '../Base/Base'
import StatusBar from '../StatusBar/StatusBar'
import SideNav from '../ReusableLayout/SideNav/SideNav'
import navContent from '../../assets/Json/SideNav.json'
import { namespace } from 'vuex-class'

@Component({ components: { Base, StatusBar, SideNav } })
export default class SystemsContainer extends Vue {
  @(namespace('storage').State) current: any
  public content = navContent
}
