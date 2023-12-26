<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">

        <div class="userBox">
            <h2 class="adminTxt">Admin</h2>
            <div class="logo">
            <img src="src\assets\POSLOGO.jpg" alt="Image" width="100" height="80"/>
            </div>
        </div>
        <div class="settings">
            <i class=" pi" style="font-size: 1.5rem">Security</i>  <br>
            <i class=" pi" style="font-size: 1.5rem">Theme</i>  <br>
            <i class="pi" style="font-size: 1.5rem">Profile</i>  <br>
            <i class="pi" style="font-size: 1.5rem">Log Out</i> 

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
    height: 100%;
    padding: 30px;
}
.settings {
    position: relative;
    display: inline-block;
    justify-content: center;
    margin-left: 30px;
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
  