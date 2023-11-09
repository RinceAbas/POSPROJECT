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
          label: "Settings",
          icon: "pi pi-cog",
          to: "/Settings",
        },
      ];
</script>

<template>
    <Menubar :model="items" />
    <router-view></router-view>
</template>

<style scoped>

</style>