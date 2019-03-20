import { Component, Vue } from 'vue-property-decorator'
// import Base from '../Base/Base'
import PHPSettings from '../PhpSettings/PhpSettings.vue'
import DbSettings from '../DbSettings/DbSettings.vue'
import AdminLogin from '../AdminLogin/AdminLogin.vue'
import InstallPackages from '../InstallPackages/InstallPackages.vue'
import Finish from '../Finish/Finish.vue'
@Component({
  components: { PHPSettings, DbSettings, AdminLogin, InstallPackages, Finish }
  })
class Installation extends Vue {
  private activeStep: Number = 4
}

export default Installation
