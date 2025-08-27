import Vue from "vue"
import Vuetify from "vuetify/lib"
import "./directives"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#6600cc",
      },
    },
  },
  icons: {
    iconfont: "md",
  },
})
