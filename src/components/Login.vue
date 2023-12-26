<template>
    <div>
        <div class="logoContainer">
        <Image src="src\assets\POSLOGO.jpg" alt="Image" width="250" />
        </div> 
        <div class="formContainer">
            <div class="inputContainer">
            <input type="text" v-model="username" placeholder="Enter Username" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            
            <div class="loginContainer" @click="login">
            <button type="submit"  class="button">Login</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Image from 'primevue/image';


export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // Perform login verification here
            if (this.username === 'admin' && this.password === 'password') {
                // Redirect to Home page if login is successful
                this.$router.push('/Home');
            } else {
                // Show error message if login is unsuccessful
                alert('Invalid username or password');
            }
        },
    },
};
</script>

<style scoped>

.logoContainer{
    justify-content: center;
    display: flex;
    align-items: center;
    width: 300px;
    height: 300px;   
    margin-left: 35rem;
    margin-top: 50px;
}
.formContainer{
    justify-content: center;
    display: flex;
    position: relative;
    margin-top: 20px;
}
.inputContainer{
    width: 380px;
    height: 70px;
    background-color: rgba(239, 197, 210, 0.5);
    margin: 30px 0;
    border-radius: 10px;
}
.inputContainer input{
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-weight: bolder;
    margin-left: 20px;
}

.inputContainer input::placeholder{
    color: black;
}
.loginContainer{
    display: flex;
    justify-content: center; /* Add this line to center the content horizontally */
    align-items: center;
    width: 200px;
    height: 50px;
    position: absolute;
    background-color: #EC92AE;
    margin-top: 25px;
    margin-left: 90px;
    border-radius: 30px;
}

.loginContainer input{
    
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-weight: bolder;
}

.loginContainer input::placeholder{
    color: black;
}
.button {
  background-color: #EC92AE; /* Change the background color to blue */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px; /* Add border-radius to make the button round */
}
</style>
