import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Signup from "../views/Signup.vue";
import User from "../views/User.vue";
import Login from "../views/Login.vue";

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
		meta: {
			requiresAuth: true
		}
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
		meta: {
			requiresUnauth: true
		}
  },
  {
    path: "/user",
    name: "User",
    component: User,
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: ':username',
				component: User,
			}
		]
  },
	{
		path: "/Login",
		name: "Login",
		component: Login,
		meta: {
			requiresUnauth: true
		}
	},
];

const router = new VueRouter({
  routes,
});

router.beforeEach(function(to, from, next){
	if (to.meta.requiresAuth && !localStorage.getItem('token')) {
		next('/login');
	} else if (to.meta.requiresUnauth && localStorage.getItem('token')) {
		next('/')
	} else {
		next()
	}
})

export default router;
