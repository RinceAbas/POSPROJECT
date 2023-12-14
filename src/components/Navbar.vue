<script setup>
const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Dashboard",
    icon: "pi pi-fw pi-desktop",
    to: "/Dashboard",
  },
  {
    label: "Debt",
    icon: "pi pi-cart-plus",
    to: "/Debt",
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