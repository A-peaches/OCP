import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import axios from 'axios';
import "./assets/css.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(router);
// app.use(store);

// Axios를 Vue 인스턴스의 전역 속성으로 설정
app.config.globalProperties.$axios = axios;

app.mount("#app");