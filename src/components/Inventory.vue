<template>
    <Navbar/>
    <div class="line"> </div>
    <div class="pageBody">
        <div class="pageBody1">
            <h3 class="inventoryContainer">Inventory</h3>
            <div class="addItemBttn">
            <div class="SortBy">    
            <button class="add-review-btn" @click="showAddOverlay = true">Add Item</button>
            </div>  
        </div>
    <div class="menuBody">
        <div class="menu-container" v-for="(menuItem, index) in menuItems" :key="menuItem.ItemID">
    <Panel :header="menuItem.menuItemCategory">
        <div class="menuItems">
            <div class="itemPic">   
                <img :src="menuItem.menuItemPic" alt="Image" width="100" height="80" />
            </div>
            <div class="name">{{ menuItem.menuItemName }}</div>
            <div class="price">₱{{ menuItem.menuItemPrice }}</div>
            <div class="buttons">
                <Button label="Secondary" severity="secondary" raised class="editBttn" @click="editItem(index)">Edit</Button>
                <Button label="Danger" severity="danger" raised class="deleteBttn" @click="deleteItem(menuItem)">Delete</Button>
            </div>
        </div>
    </Panel>
</div>
</div>
    </div>
</div>
    <div v-if="showAddOverlay" class="overlay">
            <div class="overlay-content">
                <h2>Add Item</h2>
                <div class="overlay-content1">
                <div class="form-group">
                    <label for="category">Category:</label>
                        <select id="category" v-model="addItem.category">
                        <option value="Meals">Meals</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Desserts">Desserts</option>
                        </select>
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
                    <label for="pic">Image Link:</label>
                    <input type="text" id="pic" v-model="addItem.pic" />
                </div>
                <div class="buttons">
                    <Button label="Save" class="saveBttn" @click="saveItem" />
                    <Button label="Cancel" @click="cancelItem" />
                </div>
            </div>
        </div>
        </div>

    <div v-if="showEditOverlay" class="overlay">
            <div class="overlay-content">
                <h2>Edit Item</h2>
                <div class="overlay-content1">
                <div class="form-group">
                    <label for="category">Category:</label>
                        <select id="category" v-model="editedItem.category">
                        <option value="Meals">Meals</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Desserts">Desserts</option>
                        </select>
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
                    <label for="pic">Image Link:</label>
                    <input type="text" id="pic" v-model="editedItem.pic" />
                </div>
                <div class="buttons">
                    <Button label="Save" class="saveBttn" @click="saveEditedItem" />
                    <Button label="Cancel" @click="cancelItem" />
                </div>
            </div>
        </div>    
    </div>    

</template>

<script setup>
import Panel from "primevue/panel";
import { ref, onMounted } from "vue";
import Button from "primevue/button";
import Navbar from './Navbar.vue';
import axios from 'axios';

const menuItems = ref([]);
const imagePreview = ref();
const uploadedFile = ref(null);

async function fetchMenuItems() {
  try {
    const response = await axios.get('http://localhost:8000/api/menu/');
    menuItems.value = response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
  }
}

onMounted(fetchMenuItems);


async function deleteItem(menuItem) {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) {
        return; // If user cancels, exit the function
    }

    try {
        const response = await axios.delete(`http://localhost:8000/api/menu/${menuItem.ItemID}`);
        if (response.status === 200) {
            // If successful, remove the item from the menuItems array
            const index = menuItems.value.findIndex(item => item.ItemID === menuItem.ItemID);
            if (index !== -1) {
                menuItems.value.splice(index, 1);
            }
            alert("Item deleted successfully");
        }
    } catch (error) {
        // Handle error response
        console.error(error);
        alert("Error deleting item");
    }
}

const addItem = ref({
    category: "",
    name: "",
    price: "",
    pic: ""
});

const editedItem = ref({
    id: "",
    category: "",
    name: "",
    price: "",
    pic: ""
});

const showEditOverlay = ref(false);
const showAddOverlay = ref(false);

function editItem(index) {
    console.log("Editing item with ID:", menuItems.value[index].ItemID);
    editedItem.value = { ...menuItems.value[index] };
    editedItem.value.ItemID = menuItems.value[index].ItemID; // Ensure ItemID is correctly accessed
    console.log("Edited item:", editedItem.value);
    showEditOverlay.value = true;
}

async function saveEditedItem() { 
  try {

    const formData = new FormData();
    formData.append('menuItemCategory', editedItem.value.category);
    formData.append('menuItemName', editedItem.value.name);
    formData.append('menuItemPrice', editedItem.value.price);
    formData.append('menuItemPic', editedItem.value.pic);

    const response = await axios.put(`http://localhost:8000/api/menu/${editedItem.value.ItemID}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // This might still be necessary depending on the backend implementation
      }
    });

    // Update the menuItems array with the edited item data
    const editedItemIndex = menuItems.value.findIndex(item => item.ItemID === editedItem.value.ItemID);
    if (editedItemIndex !== -1) {
      menuItems.value.splice(editedItemIndex, 1, response.data);
    }

    showEditOverlay.value = false;
    alert("Item updated successfully");
  } catch (error) {
    console.error('Error updating item:', error);
    alert("Error updating item. See console for details.");
  }
}

async function saveItem() { 

  try {
    const formData = new FormData();
    formData.append('menuItemCategory', addItem.value.category);
    formData.append('menuItemName', addItem.value.name);
    formData.append('menuItemPrice', addItem.value.price);
    formData.append('menuItemPic', addItem.value.pic);

    const response = await axios.post('http://localhost:8000/api/menu/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    menuItems.value.push(response.data);
    showAddOverlay.value = false;
    
    alert("Item added successfully");
  } catch (error) {
    console.error('Error adding item:', error);
    alert("Failed to add item. See console for details.");
  }
}


function cancelItem() {
    addItem.value = {
    category: "",
    name: "",
    price: "",
    pic: ""
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
</script>

<style scoped>

.line{
    border: 2.5px solid #000000;
}

h3 {
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
        height: 100%;
        width: 100%;
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
    position: relative;
    width: 120px;
    height: 40px;
    background-color: #F7D3DE;
    color: rgb(0, 0, 0);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: -20px;
    margin-left: -100px;
    margin-top: 15px;
    transition: background-color 0.3s ease;
}

.add-review-btn:hover{
    background-color: #EC92AE;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay-content {
    width: 450px;
    height: 390px;
    background-color: #EC92AE;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    align-items: center;
}
.overlay-content1{
    position: relative;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
}
.form-group{
    margin-top: 20px;
}

.pageBody{
    background-color: rgba(236, 146, 174, 0.5);
    width: 100%;
    height: 100%;
    padding: 30px;
}
.pageBody1{ 
    position: relative;
    width: 93%;
    height: 95%;
    background-color: #F7D3DE;
    border-radius: 30px;
    margin-left: 50px;
}   
.inventoryContainer{
    position: absolute;
    margin-left: 20px;
}
</style>