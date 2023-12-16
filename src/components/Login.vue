<template>
    <div>
        <h1>Login</h1>
        <div>
            <input type="text" v-model="username" placeholder="Enter Username" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button type="submit" @click="login">Login</button>
        </div>
    </div>
</template>

<script>
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

<style scoped></style>
