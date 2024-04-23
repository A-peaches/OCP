import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store"
import "./assets/css.css";
import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.mount("#app");
