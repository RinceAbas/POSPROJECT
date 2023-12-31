<script setup>
import { ref, computed } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Navbar from './Navbar.vue';

const showOverlay = ref(false);

const orders = ref([
    { orderNum: '1', transactionID: '0001', date: '10/25/23', time: '12:00nn', total: '₱60', status: 'Pending', items: [
        {name: 'Adobo with Rice', quantity: '1', price: '₱60'},
    ] },
    { orderNum: '2', transactionID: '0002', date: '10/25/23', time: '1:00pm', total: '₱120', status: 'Pending', items: [
        {name: 'Adobo with Rice', quantity: '1', price: '₱60'},
        {name: 'Afritada with Rice', quantity: '1', price: '₱60'},
    ]},
    { orderNum: '3', transactionID: '0003', date: '10/26/23', time: '10:00am', total: '₱180', status: 'Pending', items: [
        {name: 'Adobo with Rice', quantity: '1', price: '₱60'},
        {name: 'Afritada with Rice', quantity: '1', price: '₱60'},
        {name: 'Mechado with Rice', quantity: '1', price: '₱60'},
    ]},
    { orderNum: '4', transactionID: '0004', date: '10/27/23', time: '11:00am', total: '₱60', status: 'Done', items: [
        {name: 'Mechado with Rice', quantity: '1', price: '₱60'},
    ] },
]);
const calculateTotal = computed(() => {
    return orders.value.reduce((acc, order) => acc + parseFloat(order.total.replace('₱', '')), 0);
});

const newOrdersCount = computed(() => {
    return orders.value.filter(order => order.status === 'Pending').length;
});

const doneOrder = (index) => {
    if (confirm("Are you sure you want to complete this order?")) {
    orders.value[index].status = 'Done';
    }
};
const deleteOrder = (index) => {
    if (confirm("Are you sure you want to cancel this order?")) {
        orders.value[index].status = 'Cancelled';
    }
};
</script>

<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">
    <div class="rectangles">
        <div class="totalSales">
            <h3>Total Sales:</h3>
            <div class="totalSalesAmount"><h3>₱{{ calculateTotal }}</h3></div>
        </div>
        <div class="totalOrders">
            <h3>Total Orders</h3>
            <div class="totalOrdersAmount"><h3>{{ orders.length }}</h3></div>
        </div>
        <div class="newOrders">
            <h3>New Orders</h3> 
            <div class="newOrdersAmount"><h3>{{ newOrdersCount }}</h3></div>
        </div>        
    </div>
    <div class="tableContainer">
        <h3 class="orderList">
            Order List
        </h3>
    <div class="pageBody1">
        
        <DataTable :value="orders">
            <Column field="orderNum" header="Order Number"></Column>
            <Column field="transactionID" header="Transaction ID"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="time" header="Time"></Column>
            <Column field="total" header="Total"></Column>
            <Column field="status" header="Status"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button icon="pi pi-info-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="showOverlay=true; orderIndex=rowData.index"></Button>
                    <Button icon="pi pi-check-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="doneOrder(rowData.index)"></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger action-button" @click="deleteOrder(rowData.index)"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</div>
</div>
<div v-if="showOverlay" class="overlay">
            <div class="overlay-content">
                <h3>Order Info</h3>
                <div class="form-group">
                    <label for="item">Items:</label>
                    <ul>
                        <li v-for="item in orders[orderIndex].items" :key="item.name">
                            {{ item.name }} - {{ item.quantity }} - {{ item.price }}
                        </li>
                    </ul>
                </div>
                <div class="buttons">
                    <Button label="Cancel" @click="showOverlay=false" />
                </div>
            </div>
        </div>
</template>

<style scoped>
.line{
        border: 2.5px solid #000000;
    }
.pageBody{
    background-color: rgba(236, 146, 174, 0.5);
    width: 100%;
    height: 90vh;
    padding: 30px;
}
.pageBody1{
    position: absolute;
    width: 90%;
    height: 180px;
    margin-top: 10px;
    margin-left: 23px;
    margin-bottom: 60px;
    margin-right: 200px;
}
.rectangles {
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
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
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .overlay-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>