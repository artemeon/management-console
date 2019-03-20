import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
class AdminLogin extends Vue {
  private userName: String = ''
  private password: String = ''
  private email: String = ''
  async mounted () {
    const res = await axios({
      method: 'get',
      url:
        'https://dev.artemeon.de/agp/installer.php?channel=api&step=checkAdminLoginData'
    })
  }
  private handleSubmit (e: any): void {
    e.preventDefault()
    console.log('Submit', this.userName, this.password, this.email)
  }
}
export default AdminLogin
