<script setup>
import { computed } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Navbar from './Navbar.vue';

const orders = [
    { orderNum: '1', transactionID: '0001', date: '10/25/23', time: '12:00nn', total: '₱60', status: 'Pending' },
    { orderNum: '2', transactionID: '0002', date: '10/25/23', time: '1:00pm', total: '₱100', status: 'Pending'},
    { orderNum: '3', transactionID: '0003', date: '10/26/23', time: '10:00am', total: '₱20', status: 'Pending' },
    { orderNum: '4', transactionID: '0004', date: '10/27/23', time: '11:00am', total: '₱10', status: 'Done' },
];
const calculateTotal = computed(() => {
  return orders.reduce((acc, order) => acc + parseFloat(order.total.replace('₱', '')), 0);
});
const newOrdersCount = computed(() => {
  return orders.filter(order => order.status === 'Pending').length;
});

</script>

<template>
    <Navbar/>
    <div class="header">
        <h1>Dashboard</h1>
    </div>
    <div class="rectangles">
        <div class="totalSales">Total Sales 
            <div class="totalSalesAmount">₱{{ calculateTotal }}</div>
        </div>
        <div class="totalOrders">Total Orders
            <div class="totalOrdersAmount">{{ orders.length }}</div>
        </div>
        <div class="newOrders">New Orders
            <div class="newOrdersAmount">{{ newOrdersCount }}</div>
        </div>        
    </div>
    <div class="pageBody">
        <div class="bodyHeader"><h1>Orders</h1></div>
        
        <DataTable :value="orders">
            <Column field="orderNum" header="Order Number"></Column>
            <Column field="transactionID" header="Transaction ID"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="time" header="Time"></Column>
            <Column field="total" header="Total"></Column>
            <Column field="status" header="Status"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button icon="pi pi-info-circle" class="p-button-rounded p-button-success p-mr-2 action-button"></Button>
                    <Button icon="pi pi-check-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="showOverlay = true"></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger action-button" @click="deleteOrder(rowData)"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped>
.header {
    margin-left: 30px;
}
.rectangles {
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
}
.totalSales {
    width: 30%;
    height: 100px;
    background-color: #b8b8b8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 60px;
}
.totalOrders {
    width: 30%;
    height: 100px;
    background-color: #b8b8b8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 60px;
}
.newOrders {
    width: 30%;
    height: 100px;
    background-color: #b8b8b8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 60px;
}
.bodyHeader{
    margin-left: 30px;
}
</style>