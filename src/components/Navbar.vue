<script setup>

const items = [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Reviews",
          icon: "pi pi-thumbs-up",
          to: "/Reviews",
        },
        {
          label: "Charts",
          icon: "pi pi-chart-line",
          to: "/Charts",
        },
        {
          label: "Inventory",
          icon: "pi pi-shopping-bag",
          to: "/Inventory",
        },
        {
          label: "TopProducts",
          icon: "pi pi-star-fill",
          to: "/TopProducts",
        },
        {
          label: "Settings",
          icon: "pi pi-cog",
          to: "/Settings",
        },
        {
          label: "Profile",
          icon: "pi pi-user",
          to: "/Profile",
        },
      ];
</script>

<template>
  <div>
    <Menubar :model="items" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>