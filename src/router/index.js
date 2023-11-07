import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Charts from "../components/Charts.vue";
import Inventory from "../components/Inventory.vue";
import Login from "../components/Login.vue";
import Reviews from "../components/Reviews.vue";
import Settings from "../components/Settings.vue";
import TopProducts from "../components/TopProducts.vue";
import Profile from "../components/Profile.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Reviews",
      name: "Reviews",
      component: Reviews,
    },
    {
      path: "/Charts",
      name: "Charts",
      component: Charts,
    },
    {
      path: "/Inventory",
      name: "Inventory",
      component: Inventory,
    },
    {
      path: "/TopProducts",
      name: "TopProducts",
      component: TopProducts, 
    },
    {
      path: "/Settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/Profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;