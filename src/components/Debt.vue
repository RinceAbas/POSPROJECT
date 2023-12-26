<template>
    <Navbar/>
    <div class="line"> </div>
    
    <div class="pageBody">
    <h1>Debt</h1>
    <div class="rounded-table">
        <DataTable :value="orders" >
            <Column field="orderNum" header="Order Number"></Column>
            <Column field="referenceNum" header="Reference Number"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="time" header="Time"></Column>
            <Column field="total" header="Total"></Column>
            <Column field="status" header="Status"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button icon="pi pi-info-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="showOverlay = true"></Button>
                    <Button icon="pi pi-check-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="doneOrder(rowData.index)"></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger action-button" @click="deleteOrder(rowData.index)"></Button>
                </template>
            </Column>
        </DataTable>
        </div>
    </div>
    <div v-if="showOverlay">
            <div class="overlay-content">
                <h3>Payment Method</h3>
                <Button label="Cash" class="cashBttn" @click="handlePayment('cash')" />
                <Button label="Gcash" class="onlineBttn" @click="handlePayment('online')" />
                <Button label="Cancel" severity="danger" class="cancelCBttn" @click="showOverlay = false">Cancel</Button> 
            </div>
        </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Navbar from './Navbar.vue';
import { ref } from 'vue';

const showOverlay = false;


const orders = ref([
    { orderNum: '1', referenceNum: '0001', date: '10/25/23', time: '12:00nn', total: '₱60', status: 'Pending' },
    { orderNum: '2', referenceNum: '0002', date: '10/25/23', time: '1:00pm', total: '₱100', status: 'Pending'},
    { orderNum: '3', referenceNum: '0003', date: '10/26/23', time: '10:00am', total: '₱20', status: 'Pending' },
    { orderNum: '4', referenceNum: '0004', date: '10/27/23', time: '11:00am', total: '₱10', status: 'Done' },
]);
const doneOrder = (index) => {
    orders.value[index].status = 'Done';
};

const deleteOrder = (index) => {
    if (confirm("Are you sure you want to cancel this order?")) {
        orders.value[index].status = 'Cancelled';
    }
};
</script>

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
.action-button {
    margin-left: 3px;
}
.rounded-table{
    border-radius: 10px;
    margin-top: 30px;
}
</style>
