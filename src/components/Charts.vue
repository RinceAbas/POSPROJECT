<template>
    <div>
        <h1>Charts</h1>
        <Chart :type="'pie'" :data="chartData" :options="chartOptions" />
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
                    <td>Soap</td>
                    <td>300</td>
                    <td>$3000</td>
                </tr>
                <tr>
                    <td>Lotions</td>
                    <td>50</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td>Perfumes</td>
                    <td>100</td>
                    <td>$1000</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';

const chartData = {
    labels: ['Soap', 'Lotions', 'Perfumes'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
