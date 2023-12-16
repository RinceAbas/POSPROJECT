<template>
    <Navbar/>
    <div class="pageBody">
        <h1>Debt</h1>
        <DataTable :value="orders">
            <Column field="orderNum" header="Order Number"></Column>
            <Column field="referenceNum" header="Reference Number"></Column>
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

    <div v-if="showOverlay" class="overlay">
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

const orders = [
    { orderNum: '1', referenceNum: '0001', date: '10/25/23', time: '12:00nn', total: '₱60', status: 'Pending' },
    { orderNum: '2', referenceNum: '0002', date: '10/25/23', time: '1:00pm', total: '₱100', status: 'Pending'},
    { orderNum: '3', referenceNum: '0003', date: '10/26/23', time: '10:00am', total: '₱20', status: 'Pending' },
    { orderNum: '4', referenceNum: '0004', date: '10/27/23', time: '11:00am', total: '₱10', status: 'Done' },
];

const orderInfo = [
    {referenceNum: '0001', items: '1x Chicken Joy, 1x Jolly Spaghetti, 1x Peach Mango Pie, 1x Regular Fries, 1x Regular Softdrinks'},
    {referenceNum: '0002', items: '1x Chicken Joy, 1x Jolly Spaghetti, 1x Peach Mango Pie, 1x Regular Fries, 1x Regular Softdrinks'},
    {referenceNum: '0003', items: '1x Chicken Joy, 1x Jolly Spaghetti, 1x Peach Mango Pie, 1x Regular Fries, 1x Regular Softdrinks'},
    {referenceNum: '0004', items: '1x Chicken Joy, 1x Jolly Spaghetti, 1x Peach Mango Pie, 1x Regular Fries, 1x Regular Softdrinks'},
]
function confirmOrder(rowData) {
    // handle edit logic here
}

function deleteOrder(rowData) {
    if (confirm("Are you sure you want to delete this order?")) {
        const index = orders.indexOf(rowData);
        if (index > -1) {
            orders.splice(index, 1);
        }
    }
}
    

</script>

<style scoped>
h1 {
    margin-left: 40px;
    margin-right: 40px;
}

.action-button {
    margin-left: 3px;
}
</style>
