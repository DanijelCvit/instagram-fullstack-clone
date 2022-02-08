import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/create-post",
    name: "Create",
    component: Create,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
