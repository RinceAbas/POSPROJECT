<template>
    <Navbar/>
    <div class="line"> </div>
    
    <div class="pageBody">
    <h1>Debt</h1>
    <div class="rounded-table">
        <DataTable :value="orders" scrollable scrollHeight="400px" >
            <Column field="OrderID" header="Order Number"></Column>
            <Column field="orderType" header="Order Type"></Column>
            <Column field="orderDate" header="Date"></Column>
            <Column field="orderTime" header="Time"></Column>
            <Column field="orderTotal" header="Total"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button
                    icon="pi pi-info-circle"
                    class="p-button-rounded p-button-success p-mr-2 action-button"
                    @click="showOverlay=true; orderIndex=rowData.index"
                    ></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger action-button" @click="deleteOrder(rowData.index)"></Button>
                </template>
            </Column>
        </DataTable>
        </div>
    </div>
    <div v-if="showOverlay" class="overlay">
            <div class="overlay-content">
                <h3>Order Info</h3>
                <div class="form-group">
                    <label for="item">Items:</label>
                    <ul>
                        <li v-for="item in parsedOrderItems" :key="item.name">
                            {{ item.name }} - ₱{{ item.price }} x {{ item.quantity }} = ₱{{ item.price * item.quantity }}
                        </li>
                    </ul>
                </div>
                <div class="buttons">
                    <Button label="Cancel" @click="showOverlay=false" />
                </div>
            </div>
        </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Navbar from './Navbar.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const showOverlay = ref(false);
const orderIndex = ref(0);

const orders = ref([]);



const parsedOrderItems = computed(() => {
  if (orderIndex.value !== null && orders.value[orderIndex.value]) {
    return JSON.parse(orders.value[orderIndex.value].orderItem);
  }
  return [];
});

const deleteOrder = async (index) => {
    if (confirm("Are you sure you want to cancel this order?")) {
        try {
            const orderId = orders.value[index].OrderID;
            await axios.delete(`http://localhost:8000/api/orders/${orderId}`);
            orders.value.splice(index, 1); // Remove the deleted order from the frontend list
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    }
};

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/orders/showDebt');
    orders.value = response.data;
    console.log('Orders fetched:', orders.value); // Debugging: log fetched orders
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

onMounted(() => {
  fetchData();
}); 

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
