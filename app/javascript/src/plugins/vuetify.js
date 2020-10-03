import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#BD93F9',
        light: '#bcc2cd',
        secondary: '#363755',
        accent: '#82B1FF',
        error: '#ff79c6',
        info: '#2196F3',
        success: '#50fa7b',
        warning: '#ffb86c',
        background: '#282a36',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
  dark: true,
}

export default new Vuetify(opts)