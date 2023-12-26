<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">

        <div class="userBox">
            <h2 class="adminTxt">Admin</h2>
            <div class="logo">
            <img src="../assets/POSLOGO.jpg" alt="Image" width="100" height="80"/>
            </div>
        </div>
        <div class="settings">
            <Button class ="buttons" label="Theme" severity="secondary" text/>  <br>
            <Button class ="buttons" label="Profile" severity="secondary" text/>  <br>
            <Button class ="buttons" label="Log Out" severity="secondary" text @click="logout"/> 

        </div>
    </div>z
</template>

<script setup>
import { useRouter } from 'vue-router';
import Navbar from './Navbar.vue';
import Image from 'primevue/image';
import Button from 'primevue/button';

const router = useRouter();

const logout = () => {
  router.push('/');
};
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
    padding: 100px;
}
h1{
    margin-left: 40px;
    margin-right: 40px
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
    margin-left: 30%;
    margin-top: 80px;
}  
.logo{
    position: absolute;
    margin-left: 230px;
}  
.settings {
    margin-left: 550px;
    margin-right: 80px;
    margin-top: 50px;
}

.buttons{
        display: flex;
        justify-content: center;
        position: relative;
        align-items: center;
    flex-direction: column;
        font-family: 'Inter', sans-serif;
        border-style: double;
        border-radius: 7px;
        border-style: solid;
        color: #000000;
        box-shadow: none;
        transition: background-color 0.3s ease;
    }
.buttons:hover{
    background-color: #EC92AE;
}
</style>
  