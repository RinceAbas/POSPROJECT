<template>
    <Navbar/>
    <div>
        <h1>Settings</h1>

        <div class="userBox">
            <h2 class="adminTxt">Admin</h2>
            <Image src="https://upload.wikimedia.org/wikipedia/en/6/67/University_of_the_Immaculate_Conception_Logo.png" alt="Image" width="50" />
        </div>
        <div class="settings">
            <i class="pi pi-shield" style="font-size: 1.5rem">Security</i>  <br>
            <i class="pi pi-palette" style="font-size: 1.5rem">Theme</i>  <br>
            <i class="pi pi-user" style="font-size: 1.5rem">Profile</i>  <br>
            <i class="pi pi-power-off" style="font-size: 1.5rem">Log Out</i> 

        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
    import Image from 'primevue/image';
</script>

<style scoped>
.settings {
    display: inline-block;
    justify-content: space-between;
    margin-left: 80px;
    margin-right: 80px;
}
h1{
    margin-left: 40px;
    margin-right: 40px
}
.pi{
    margin-top: 20px;
}
.adminTxt{
    margin-right: 20px;
}
.userBox{
    display: flex;
    align-items: center;
    justify-content: center;
}    
.settings {
    display: inline-block;
    justify-content: space-between;
    margin-left: 690px;
    margin-right: 80px;
}

</style>
  