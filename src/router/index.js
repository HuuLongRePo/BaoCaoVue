import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta:{
        layout:"User"
      }
    },
    {
      path: "/jsview",
      name: "jsview",
      component: () => import("../views/JsView.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: () => import("../views/LearnVue/LifecycleHook.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/scopecss",
      name: "scopecss",
      component: () => import("../views/LearnVue/ScopeCss.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/mecoda",
      name: "mecoda",
      component: () => import("../views/LearnVue/MeCoDa.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/databinding",
      name: "databinding",
      component: () => import("../views/LearnVue/DataBinding.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/eventkey",
      name: "eventkey",
      component: () => import("../views/LearnVue/EventKey.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/propsemit",
      name: "propsemit",
      component: () => import("../views/LearnVue/PropsEmit.vue"),
      meta:{
        layout:"User"
      }
    },
    {
      path: "/routerslot",
      name: "routerslot",
      component: () => import("../views/LearnVue/RouterSlot.vue"),
      meta:{
        layout:"Blank"
      }
    },
    {
      path: "/watchref",
      name: "watchref",
      component: () => import("../views/LearnVue/WatchRef.vue"),
      meta:{
        layout:"User"
      }
    },
  ],
});



export default router;
