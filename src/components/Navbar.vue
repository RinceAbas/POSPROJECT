<script setup>
const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Debt",
    icon: "pi pi-cart-plus",
    to: "/Inventory",
  },
  {
    label: "Charts",
    icon: "pi pi-chart-line",
    to: "/Charts",
  },
  {
    label: "Inventory",
    icon: "pi pi-shopping-bag",
    to: "/Reviews",
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    to: "/Settings",
  },
];
</script>

<template>
  <div class="menubar">
    <Menubar :model="items" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.menubar {
  border-radius: 1000px;
}
</style>