import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
