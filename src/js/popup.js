import { createApp } from "vue";
import Popup from "./Popup.vue";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
})


createApp(Popup).use(vuetify).mount("#app");