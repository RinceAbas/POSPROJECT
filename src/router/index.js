import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Charts from "../components/Charts.vue";
import Debt from "../components/Debt.vue";
import Login from "../components/Login.vue";
import Inventory from "../components/Inventory.vue";
import Settings from "../components/Settings.vue";
import Dashboard from "../components/Dashboard.vue";

const routes = [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Inventory",
      name: "Inventory",
      component: Inventory,
    },
    {
      path: "/Charts",
      name: "Charts",
      component: Charts,
    },
    {
      path: "/Debt",
      name: "Debt",
      component: Debt,
    },
    {
      path: "/Settings",
      name: "Settings",
      component: Settings,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;