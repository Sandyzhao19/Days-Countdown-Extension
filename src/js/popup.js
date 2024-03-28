import { createApp } from "vue";
import Popup from "./Popup.vue";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// VueDatePicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// Vue3EasyDataTable
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

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

const app = createApp(Popup);

app.component('VueDatePicker', VueDatePicker);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(vuetify);

app.mount("#app");

// Fetch user info using chrome.identity.getProfileUserInfo
chrome.identity.getProfileUserInfo({'accountStatus': 'ANY'}, function(info) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError.message);
    return;
  }

  const email = info.email;
  console.log(info);
});


