<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">
        <div class="userBox">
            <h2 class="adminTxt">Admin</h2>
            <div class="logo">
            <Image src="https://upload.wikimedia.org/wikipedia/en/6/67/University_of_the_Immaculate_Conception_Logo.png" alt="Image" width="95" height="95" />
            </div>
        </div>
        <div class="settings">
            <i class="pi pi.security" style="font-size: 1.5rem">Security</i><br>
            <i class="pi pi.theme" style="font-size: 1.5rem">Theme</i><br>
            <i class="pi pi.profile" style="font-size: 1.5rem">Profile</i><br>
            <i class="pi pi.logout" style="font-size: 1.5rem">Log Out</i><br>
        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Image from 'primevue/image';
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.line{
        border: 2.5px solid #000000;
}
.pageBody{
    background-color: rgba(236, 146, 174, 0.5);
    width: 100%;
    height: 90vh;
    padding: 30px;
}
.settings {
    position: relative;
    display: inline-block;
    justify-content: space-between;
    margin-left: 100px;
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
    position: absolute;
    margin-right: 250px;
}
.userBox{
    background-color: #F7D3DE;
    height: 170px;
    width: 450px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 33.5rem;
    margin-top: 80px;
}  
.logo{
    position: absolute;
    margin-left: 230px;
}  
.settings {
    position: relative;
    display: inline-block;
    justify-content: space-between;
    margin-left: 690px;
    margin-right: 80px;
    margin-top: 50px;
}
.pi{
    display: flex;
    justify-content: center;
    position: relative;
    font-family: 'Inter', sans-serif;
    margin-left: 25px;;
    margin-top: 35px;
}
</style>
  