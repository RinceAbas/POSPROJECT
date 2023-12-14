<template>
    <div>
        <h1>Login</h1>
        <div>
            <input type="text" v-model="username" placeholder="Enter Username" />
            <input type="text" v-model="password" placeholder="Enter Password" />
            <router-link to="/Home">
                <button type="submit">Login</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
};
</script>

<style scoped></style>

