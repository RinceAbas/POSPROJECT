<template>
    <div class="pageBody">
        <h1>Debt</h1>
        <DataTable :value="orders">
            <Column field="orderNum" header="Order Number"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="time" header="Time"></Column>
            <Column field="total" header="Total"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button icon="pi pi-check-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="confirmOrder(rowData)"></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger action-button" @click="deleteOrder(rowData)"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const orders = [
    { orderNum: '1', date: '10/25/23', time: '12:00nn', total: '₱60' },
    { orderNum: '2', date: '10/25/23', time: '1:00pm', total: '₱100'},
    { orderNum: '3', date: '10/26/23', time: '10:00am', total: '₱20' },
    { orderNum: '4', date: '10/27/23', time: '11:00am', total: '₱10' },
];

function confirmOrder(rowData) {
    // handle edit logic here
}

function deleteOrder(rowData) {
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
