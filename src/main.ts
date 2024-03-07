
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import router from './router'

import VueNumber from 'vue-number-animation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.use(VueNumber)

app.mount('#app')
