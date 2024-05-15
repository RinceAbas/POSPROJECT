<script setup>
import { ref, computed, onMounted} from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Navbar from './Navbar.vue';
import axios from 'axios';

const showOverlay = ref(false); 
const orders = ref([]);
const orderIndex = ref(null);

const parsedOrderItems = computed(() => {
  if (orderIndex.value !== null && orders.value[orderIndex.value]) {
    return JSON.parse(orders.value[orderIndex.value].orderItem);
  }
  return [];
});

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/orders/showOrders');
    orders.value = response.data;
    console.log('Orders fetched:', orders.value); // Debugging: log fetched orders
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

onMounted(() => {
  fetchData();
}); 

const calculateTotal = computed(() => {
    return orders.value.reduce((acc, order) => {
        if (typeof order.orderTotal === 'number') {
            acc += order.orderTotal;
        }
        return acc;
    }, 0);
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
</script>

<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">
    <div class="rectangles">
        <div class="totalSales">
            <div class="totalSalesAmount"><h3>Total Sales: ₱{{ calculateTotal }}</h3></div>
        </div>
        <div>
        </div>
        <div class="totalOrders">
            <div class="totalOrdersAmount"><h3>Total Orders: {{ orders.length }}</h3></div>
        </div>      
    </div>
    <div class="tableContainer">
        <h3 class="orderList">
            Order List
        </h3>   
    <div class="pageBody1">
        <DataTable :value="orders" scrollable scrollHeight="400px">
            <Column field="OrderID" header="Order Number"></Column>
            <Column field="orderType" header="OrderType"></Column>
            <Column field="orderDate" header="Date"></Column>
            <Column field="orderTime" header="Time"></Column>
            <Column field="orderTotal" header="Total"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button icon="pi pi-info-circle" class="p-button-rounded p-button-success p-mr-2 action-button" @click="showOverlay=true; orderIndex=rowData.index"></Button>
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
    margin-left: 300px;
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
.blank {
    width: 30%;
    height: 100px;
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
  .action-button {
    margin-left: 3px;
}
</style>