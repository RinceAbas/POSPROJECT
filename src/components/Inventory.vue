<template>
    <Navbar/>
    <h1>Inventory</h1>
    <div class="addItemBttn">
        <div class="SortBy">
            <button class="add-review-btn" @click="showAddOverlay = true">Add Item</button>
        </div>  
    </div>
    <div class="menuBody">
    <div class="menu-container" v-for="(menuItems, i) in menuItems" :key="i">
                <Panel :header="menuItems.category">
                    <div class="menuItems">
                        <div class="itemPic">
                            <Image :src="menuItems.samplepic" alt="Item Image" width="100" height="75" />
                        </div>
                        <div class="name">{{ menuItems.name }}</div>
                        <div class="price">₱{{ menuItems.price }}</div>
                        <div class="buttons">
                            <Button label="Secondary" severity="secondary" raised class="editBttn" @click="editItem(i)">Edit</Button>
                            <Button label="Danger" severity="danger" raised class="deleteBttn" @click="deleteItem(i)">Delete</Button>
                        </div>
                    </div>
                </Panel>
            </div>  
    </div>
    <div v-if="showAddOverlay" class="overlay">
            <div class="overlay-content">
                <h2>Add Item</h2>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <input type="text" id="category" v-model="addItem.category" />
                </div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="addItem.name" />
                </div>
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="text" id="price" v-model="addItem.price" />
                </div>
                <div class="form-group">
                    <label for="samplepic">Sample Picture:</label>
                    <input type="file" id="samplepic" @change="handleFileUpload" />
                </div>
                <div class="buttons">
                    <Button label="Save" class="saveBttn" @click="saveItem" />
                    <Button label="Cancel" @click="cancelItem" />
                </div>
            </div>
        </div>

    <div v-if="showEditOverlay" class="overlay">
            <div class="overlay-content">
                <h2>Edit Item</h2>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <input type="text" id="category" v-model="editedItem.category" />
                </div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="editedItem.name" />
                </div>
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="text" id="price" v-model="editedItem.price" />
                </div>
                <div class="form-group">
                    <label for="samplepic">Sample Picture:</label>
                    <input type="file" id="samplepic" @change="handleFileUpload" />
                </div>
                <div class="buttons">
                    <Button label="Save" class="saveBttn" @click="saveEditedItem" />
                    <Button label="Cancel" @click="cancelItem" />
                </div>
            </div>
        </div>        

</template>

<script setup>
import Panel from "primevue/panel";
import { ref, computed } from "vue";
import  Button  from "primevue/button";
import Image  from "primevue/image";
import Navbar from './Navbar.vue';

function deleteItem(index) {
    menuItems.value.splice(index, 1);
}

const menuItems = ref([
        {
            category: "Meal",
            name: "Adobo with Rice",
            price: "60",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Meal",
            name: "Afritada with Rice",
            price: "60",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Meal",
            name: "Mechado with Rice",
            price: "60",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Drinks",
            name: "Coke",
            price: "25",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Drinks",
            name: "Minute-Maid",
            price: "20",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Drinks",
            name: "Mineral Water",
            price: "20",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Snacks",
            name: "Rebisco",
            price: "8",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Snacks",
            name: "Maruya",
            price: "10",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Snacks",
            name: "Bread",
            price: "10",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Desserts",
            name: "Spaghetti",
            price: "30",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Desserts",
            name: "Halo-Halo",
            price: "30",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        },
        {
            category: "Desserts",
            name: "Mais Con Yelo",
            price: "30",
            samplepic: "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        }
    ]);

const addItem = ref({
    category: "",
    name: "",
    price: "",
    samplepic: ""
});

const editedItem = ref({
    category: "",
    name: "",
    price: "",
    samplepic: ""
});

const showEditOverlay = ref(false);
const showAddOverlay = ref(false);

function editItem(index) {
    editedItem.value = { ...menuItems.value[index] };
    showEditOverlay.value = true;
}

function saveEditedItem() {
    menuItems.value.splice(index, 1, editedItem.value);
    cancelItem();
}

function saveItem() {
    menuItems.value.push(addItem.value);
    cancelItem();
}

function cancelItem() {
    addItem.value = {
        category: "",
        name: "",
        price: "",
        samplepic: ""
    };
    editedItem.value = {
        category: "",
        name: "",
        price: "",
        samplepic: ""
    };
    showAddOverlay.value = false;
    showEditOverlay.value = false;
}

function handleFileUpload(event) {
    const file = event.target.files[0];
}

</script>

<style scoped>

h1 {
    margin-left: 40px;
}
.addItemBttn {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 40px;
    margin-top: 20px;
}
.editBttn{
    margin-right: 10px;
}
.saveBttn{
    margin-right: 10px;
    margin-top: 10px;
}
.SortBy {
    margin-left: 20px;
}

.buttons {
    margin-right: 10px;
}

.menuBody {
    margin-top: 20px; margin-bottom: 20px;
        display: flex;
        align-items: center;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
}

.menu-container{
    width: 400px;
    margin: 10px 20px;
}

@media (min-width: 768px) {
    .col-md-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
}

.add-review-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}


.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.form-group{
    margin-top: 20px;
}
</style>