<template>
    <h1>Profile</h1>
    <div class="ProfileContainer">
    <div class="ProfileBox">
        <div class="ChangingArea">
            <label for="Name">Name <br></label>
            <InputText id="Name" v-model="value" aria-describedby="name-help" /> <br>
            <label for="Password">Password <br></label>
            <InputText id="Name" v-model="value" aria-describedby="name-help" /> <br>
            <div class="Buttons"><Button label="Update Profile"/></div>
        </div>
    </div>
    <div class="ImgBox">
        <div class="imga"><Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" /><br></div>
        <div class="Buttons"><Button type="button" label="Edit Profile" icon="pi pi-pencil" :loading="loading" @click="load" size ="small"/></div>
    </div>
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import Image from 'primevue/image';
const value = ref(null);
</script>

<style scoped>
    .ProfileContainer {
    display: flex;
    justify-content: space-between;
    margin-left: 80px;
    margin-right: 20px;
}

.ProfileBox {
    width: 50%;
}
.ImgBox {
    width: 40%;
}
.Buttons {
    margin-top: 20px;
}
.imga {
    border-radius: 50%;
}

h1{
    margin-left: 40px;
    margin-right: 40px
}
</style>
  