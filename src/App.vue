<script setup>
import Home from "./components/Home.vue";

const items = [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Reviews",
          icon: "pi-thumbs-up",
          to: "/Reviews",
        },
        {
          label: "Charts",
          icon: "pi-chart-line",
          to: "/Charts",
        },
        {
          label: "Inventory",
          icon: "pi-shopping-bag",
          to: "/Inventory",
        },
        {
          label: "TopProducts",
          icon: "pi-star-fill",
          to: "/TopProducts",
        },
        {
          label: "Settings",
          icon: "pi-cog",
          to: "/Settings",
        },
        {
          label: "Profile",
          icon: "pi-user",
          to: "/Profile",
        },
      ];
</script>

<template>
  <Home/>
  <div>
    <Menubar :model="items" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
