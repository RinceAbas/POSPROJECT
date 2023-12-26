<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">
        <div class="chart">
             <Chart :type="'bar'" :data="chartData" :options="chartOptions" />
        </div>
    <div></div>
    <div class="tableContainer">
        <table>
            <div class="tableContainer1">
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
                <tr>
                    <td>Drinks</td>
                    <td>200</td>
                    <td>$2000</td>
                </tr>
            </tbody>
        </div> 
        </table>
    </div>
  </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import Navbar from './Navbar.vue';

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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

.line{
        border: 2.5px solid #000000;
}
.pageBody{
    background-color: rgba(236, 146, 174, 0.5);
    width: 100%;
    height: 90vh;
    padding: 30px;
}
.chart{
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
.tableContainer{
    background-color: #F7D3DE;
    position: absolute;
    border-radius: 30px;
    width: 1200px;
    height: 300px;
    margin-left: 150px;
    margin-top: 80px;
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
