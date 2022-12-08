import Vue from "vue";
import VueRouter from "vue-router";

const strokeAnalysis = () => import("@/pages/home/index.vue");
const christmasdrew = () => import("@/pages/christmas-draw/index.vue");
const firstFormation = () => import("@/pages/goldegg-draw/index.vue");
// const newyears = () => import("@/pages/newyear-draw/index.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: strokeAnalysis,
  },
  {
    path: "/christmas-draw",
    name: "christmas-draw",
    component: christmasdrew,
  },
  {
    path: "/goldegg-draw",
    name: "goldegg-draw",
    component: firstFormation,
  },
  // {
  //   path: "/newyear-draw",
  //   name: "newyear-draw",
  //   component: newyears,
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
