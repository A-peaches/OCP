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
    component: () => import("../views/loginView.vue"),
  },
  {
    path: "/allmenu",
    name: "allmenu",
    component: () => import("../views/Allmenu.vue"),
  },
  {
    path: "/bestmenu",
    name: "bestmenu",
    component: () => import("../views/bestMenu.vue"),
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
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/joinView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/sales",
    name: "sales",
    component: () => import("../views/admin/salesView.vue"),
  },
  {
    path: "/stock",
    name: "stock",
    component: () => import("../views/admin/StockView.vue"),
  }
];
//
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
