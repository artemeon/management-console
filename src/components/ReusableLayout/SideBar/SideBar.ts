import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

@Component
class SideBar extends Vue {
  @Prop() content!: any
  @Prop({
    type: String,
    default: 'logo_small.png'
  })
  brand!: string
  @(namespace('storage').State) current!: any
  @(namespace('lock').State) locked!: any
  @(namespace('lock').Action) lockSystem!: any
  @(namespace('lock').Action) unlockSystem!: any
  public eventname: string = ''
  public class: string = 'clicked'
  handler (e) {
    var els = document.querySelectorAll('.' + this.class)
    els.forEach(element => {
      element.classList.remove(this.class)
    })
    var element = document.getElementById(e)
    if (element) {
      element.classList.add(this.class)
    }
    // @TODO handle reload
    if (this.current) {
      const url = this.current.url
      this.$router.push({ name: e, params: { system: this.current.title } })
    }
  }
  lock () {
    if (this.locked === true) {
      this.unlockSystem(this.current)
    } else {
      this.lockSystem(this.current)
    }
  }
  dashboard () {
    this.$router.push({ path: '/' })
  }
}
export default SideBar
