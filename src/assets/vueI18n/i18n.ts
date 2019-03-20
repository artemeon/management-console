import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Formatter from './Formatter'
import de from './lang_installer_de'
import en from './lang_installer_en'
Vue.use(VueI18n)

// const locale = 'de-DE' // default locale
const locale = 'de' // default locale
// const formatter = new Formatter({ locale })

export default new VueI18n({
  locale,
  //   formatter,
  messages: {
    en: {
      message: en
    },
    de: {
      message: de
    }
  }
})
