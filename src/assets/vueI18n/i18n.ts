import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Formatter from './Formatter'
import installerDe from './lang_installer_de'
import installerEn from './lang_installer_en'
import systemDe from './lang_system_de'
import systemEn from './lang_system_en'
import customDe from './custom_de'
import customEn from './custom_en'
Vue.use(VueI18n)

const locale = 'de' // default locale

export default new VueI18n({
  locale,
  //   formatter,
  messages: {
    en: {
      message: installerEn,
      system: systemEn,
      custom: customEn
    },
    de: {
      message: installerDe,
      system: systemDe,
      custom: customDe
    }
  }
})
