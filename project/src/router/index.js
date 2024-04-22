import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/location",
    name: "location",
    component: () => import("../views/LocationView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    component: () => import("../views/intro.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("../views/NoticeView.vue"),
  },
  {
    path: "/bean",
    name: "bean",
    component: () => import("../views/BeanStory.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/allmenu",
    name: "allmenu",
    component: () => import("../views/Allmenu.vue"),
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../views/EventView.vue"),
  },
  {
    path: "/noticepage",
    name: "noticepage",
    component: () => import("../views/NoticePage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
