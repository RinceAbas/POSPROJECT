<template>
    <Navbar/>
    <div>
        <h1>Charts</h1>
        <Chart :type="'bar'" :data="chartData" :options="chartOptions" />
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Sales</th>
                    <th>Total Income</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Meals</td>
                    <td>300</td>
                    <td>$3000</td>
                </tr>
                <tr>
                    <td>Snacks</td>
                    <td>50</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td>Desserts</td>
                    <td>100</td>
                    <td>$1000</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import Navbar from './Navbar.vue';

const chartData = {
    labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            data: [30000, 50000, 10000, 20000, 40000, 50000,30000, 50000, 10000, 20000, 40000, 50000],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#FF6384', '#36A2EB', '#FFCE56','#FF6384', '#36A2EB', '#FFCE56','#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#FF6384', '#36A2EB', '#FFCE56','#FF6384', '#36A2EB', '#FFCE56','#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};
</script>

<style scoped>
h1 {
    margin-left: 40px;
    margin-right: 40px;
}

table {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: #f5f5f5;
}
</style>
