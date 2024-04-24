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
    component: () => import("../views/Intro.vue"),
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
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/allmenu",
    name: "allmenu",
    component: () => import("../views/Allmenu.vue"),
  },
  {
    path: "/bestmenu",
    name: "bestmenu",
    component: () => import("../views/BestMenu.vue"),
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
    path: "/detailmenu/:id",
    name: "detailmenu",
    component: () => import("../views/DetailMenu.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/JoinView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/adminmenu",
    name: "adminmenu",
    component: () => import("../views/AdminMenu.vue"),
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
  },
  {
    path: "/useradmin",
    name: "useradmin",
    component: () => import("../views/UserAdmin.vue"),
  },
  {
    path: "/noticewrite",
    name: "noticewrite",
    component: () => import("../views/admin/WriteNotice.vue"),
  },
  {
    path: "/eventwrite",
    name: "eventwrite",
    component: () => import("../views/admin/WriteEvent.vue"),
  },
  {
    path: "/orderState",
    name: "orderState",
    component: () => import("../views/OrderState.vue"),
  },
  {
    path: "/orderList",
    name: "orderList",
    component: () => import("../views/OrderList.vue"),
  },
  {
    path: "/userdetail",
    name: "userdetail",
    component: () => import("@/views/Userdetail.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/MyPage.vue"),
  },
  {
    path: "/notice/:id",
    name: "NoticeDetail",
    component: () => import("@/views/NoticePage.vue"),
  },
];
//
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
