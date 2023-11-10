<template>
    <div>
        <h1>Inventory</h1>
        <DataTable :value="products">
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Product Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="price" header="Price per Piece"></Column>
            <Column header="Actions">
                <template #body="rowData">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2 action-button" @click="editProduct(rowData)"></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger action-button" @click="deleteProduct(rowData)"></Button>
                </template>
            </Column>
        </DataTable>
        <Button class="addButton" @click="showAddDialog = true">Add Product</Button>
        <Dialog v-model="showAddDialog" header="Add Product">
            <div class="p-fluid">
                <div class="p-field">
                    <label for="name">Name</label>
                    <InputText v-model="newProduct.name" id="name" />
                </div>
                <div class="p-field">
                    <label for="category">Category</label>
                    <InputText v-model="newProduct.category" id="category" />
                </div>
                <div class="p-field">
                    <label for="quantity">Quantity</label>
                    <InputNumber v-model="newProduct.quantity" id="quantity" />
                </div>
                <div class="p-field">
                    <label for="price">Price per Piece</label>
                    <InputNumber v-model="newProduct.price" id="price" />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" class="p-button-text" @click="showAddDialog = false" />
                <Button label="Add" class="p-button-success" @click="addProduct" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

const products = [
    { name: 'Product 1', category: 'Category A', quantity: 10, price: 5.99 },
    { name: 'Product 2', category: 'Category B', quantity: 5, price: 9.99 },
    { name: 'Product 3', category: 'Category A', quantity: 2, price: 12.99 },
    { name: 'Product 4', category: 'Category C', quantity: 7, price: 7.49 },
];

let showAddDialog = false;
let newProduct = {
    name: '',
    category: '',
    quantity: 0,
    price: 0
};

function editProduct(product) {
    // handle edit logic here
}

function deleteProduct(product) {
    // handle delete logic here
}

function addProduct() {
    products.push(newProduct);
    newProduct = {
        name: '',
        category: '',
        quantity: 0,
        price: 0
    };
    showAddDialog = false;
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
.addButton {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 20px;
}
</style>
