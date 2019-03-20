import { Component, Vue } from 'vue-property-decorator'

import Base from '../Base/Base'
import Navigation from '../Navigation/Navigation'

@Component({ components: { Base, Navigation } })
export default class App extends Vue {}
