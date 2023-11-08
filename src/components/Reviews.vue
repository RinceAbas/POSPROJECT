<template>
    <div class="container">
        <h1>Reviews</h1>
        <div class="SortBy">
            <Dropdown
                v-model="sorts"
                :options="sb"
                optionLabel="name"
                placeholder="Sort By"
                class="w-full md:w-14rem"
            />
        </div>
    </div>

</template>

<script setup>
import Dropdown from 'primevue/dropdown';
import { ref } from "vue";

const sb = ref([
    { name: 'Today', code: 'TD' },
    { name: 'Yesterday', code: 'Y' },
    { name: 'This Week', code: 'TW' },
    { name: 'This Month', code: 'TM' }
]);
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 20px;
}

h1 {
    margin: 0;
}

.SortBy {
    margin-left: 20px;
}

</style>
  