import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Resume from "../views/Resume.vue";
import Information from "../views/Information.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Resume",
    component: Resume
  },
  {
    path: "/information",
    name: "Information",
    component: Information
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  // linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;
