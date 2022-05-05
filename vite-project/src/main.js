import {createApp} from 'vue'
import {Quasar} from 'quasar'
import {createPinia} from 'pinia'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/animate/fadeInUp.css'
import '@quasar/extras/animate/fadeOutDown.css'

import App from './App.vue'

const myApp = createApp(App)
myApp.use(Quasar, {plugins: {}})
myApp.use(createPinia())

myApp.mount('#app')