<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">
        <div class="chart">
            <Chart :type="'bar'" :data="chartData" :options="chartOptions" />
        </div>
        <div class="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Payment Type</th>
                        <th>Transactions</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paymentType in paymentTypes" :key="paymentType.type">
                        <td>{{ paymentType.type }}</td>
                        <td>{{ paymentType.transactions }}</td>
                        <td>{{ paymentType.totalIncome }}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{{ totalTransactions }}</td>
                        <td>{{ sumIncome }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import Navbar from './Navbar.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const chartData = {
    labels: ['Sales'],
    datasets: [
        {
            label: 'Gcash Sales',
            data: [30000],
            backgroundColor: ['#FF6384']
        },
        {
            label: 'Cash Sales',
            data: [20000],
            backgroundColor: ['#36A2EB']
        },
        {
            label: 'Tally Sales',
            data: [10000],
            backgroundColor: ['#FFCE56']
        },
        {
            label: 'Total Sales',
            data: [60000],
            backgroundColor: ['#FFCE56']
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

const paymentTypes = ref([]);
async function fetchPaymentTypes() {
    try {
        const response = await axios.get('http://localhost:8000/api/orders/payment-types');
        console.log('Payment Types Response:', response.data);
        paymentTypes.value = response.data;
    } catch (error) {
        console.error('Error fetching payment types:', error);
    }
}

const totalTransactions = computed(() => {
    return paymentTypes.value.reduce((acc, cur) => acc + cur.transactions, 0);
});

const sumIncome = computed(() => {
    return paymentTypes.value.reduce((acc, cur) => acc + cur.totalIncome, 0);
});

onMounted(async () => {
    await fetchPaymentTypes();
});
</script>

<style scoped>
.line {
    border: 2.5px solid #000000;
}
.pageBody {
    background-color: rgba(236, 146, 174, 0.5);
    width: 100%;
    height: 90vh;
    padding: 30px;
}
.chart {
    width: 1000px;
    height: 10rem;
    justify-content: center;
    margin-top: 50px;
    margin-left: 230px;
}
table {
    margin-top: 70px;
    border-collapse: collapse;
    width: 1100px;
    margin-left: 50px;
}
.tableContainer {
    background-color: #F7D3DE;
    position: absolute;
    border-radius: 30px;
    width: 1200px;
    height: 300px;
    margin-left: 150px;
    margin-top: 80px;
}
th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
}
tr:hover {
    background-color: #f5f5f5;
}
</style>
