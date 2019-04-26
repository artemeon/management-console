import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Modal from '../ReusableLayout/Modal/Modal.vue'
@Component({ components: { Modal } })
class Base extends Vue {
  @(namespace('storage').Action) setServer!: any
  @(namespace('storage').Action) getServers!: any
  @(namespace('storage').Action) setCurrent!: any
  @(namespace('storage').State) storageLocal!: any
  private id = 'modalTopBar'
  public current = null
  public items = [
    {
      id: '1',
      label: 'item1',
      type: 'TextField',
      disabled: false
    },
    {
      id: 2,
      label: 'item2',
      type: 'TextField',
      readonly: true,
      placeholder: 'hallo'
    },
    {
      id: 'item3',
      label: 'rrrrr',
      name: 'rrr',
      type: 'Radio',
      values: [
        {
          value: 'agp1',
          label: 'agp'
        },
        {
          value: 'agp2',
          label: 'agp'
        }
      ]
    },
    {
      id: 'item 5',
      label: 'rrrrr',
      name: 'rrr',
      type: 'Select',
      values: [
        {
          value: 'kjgrk'
        },
        {
          value: 'flvgkjfn'
        }
      ]
    }
  ]
  public agp_add = [
    {
      id: 'Title',
      label: 'Title',
      type: 'TextField'
    },
    {
      id: 'Url',
      label: 'Url',
      placeholder: 'https://localhost/agpExample',
      type: 'TextField'
    },
    {
      id: 'Token',
      label: 'Token',
      type: 'TextField'
    }
  ]
  mounted () {
    this.getServers()
    this.current = this.storageLocal[0] || {}
    this.setCurrent(this.current)
  }
  getSelected () {
    this.setCurrent(this.current)
    this.$router.push({ path: '/' })
  }
}
export default Base
