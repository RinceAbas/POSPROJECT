<template>
    <h1>Home</h1>
    <div class="chart">
        <Chart :type="'pie'" :data="chartData" :options="chartOptions" />
    </div>
    <div class="panels">
        <div v-for="product in panelProducts" :key="product.name" class="panel">
            <h2>{{ product.name }}</h2>
            <div class="rating">
                <span v-for="star in 5" :key="star" class="star">★</span>
            </div>
            <p>{{ product.review }}</p>
        </div>
    </div>
    <div class="panels">
        <div v-for="product in additionalPanelProducts" :key="product.name" class="panel">
            <h2>{{ product.name }}</h2>
            <div class="rating">
                <span v-for="star in 5" :key="star" class="star">★</span>
            </div>
            <p>{{ product.review }}</p>
        </div>
    </div>
    <div class="table">
        <DataTable :value="tableProducts">
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Product Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const panelProducts = [
    { name: 'Product 1', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Product 2', review: 'Nulla facilisi. Sed euismod, elit at aliquet tincidunt.' },
    { name: 'Product 3', review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { name: 'Product 4', review: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

const additionalPanelProducts = [
    { name: 'Product 5', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Product 6', review: 'Nulla facilisi. Sed euismod, elit at aliquet tincidunt.' },
    { name: 'Product 7', review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { name: 'Product 8', review: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

const tableProducts = [
    { name: 'Product 1', category: 'Category A', quantity: 10 },
    { name: 'Product 2', category: 'Category B', quantity: 5 },
    { name: 'Product 3', category: 'Category A', quantity: 2 },
    { name: 'Product 4', category: 'Category C', quantity: 7 },
];

const chartData = {
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

.chart {
    float: left;
    margin-left: 40px;
}

.table {
    display: flex;
    margin-left: 60px;
    position: absolute;
    bottom: 90px;
}

.panels {
    display: flex;
    margin-left: 500px;
    margin-bottom: 20px;
}

.panel {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 20px;
}

.rating {
    margin-bottom: 10px;
}

.star {
    color: gold;
}
</style>
