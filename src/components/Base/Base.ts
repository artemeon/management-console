import { Component, Vue } from 'vue-property-decorator'
@Component
class Base extends Vue {
  private activeStep: Number = 0
}
export default Base
