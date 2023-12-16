<template>
    <Navbar/>
    <h1>Inventory</h1>
    <div class="addItemBttn">
        <div class="SortBy">
            <button class="add-review-btn" @click="showOverlay = true">Add Item</button>
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
                            <Button label="Secondary" severity="secondary" raised class="addBttn" @click="showOverlay = true">Edit</Button>
                            <Button label="Danger" severity="danger" raised class="d" @click="clearOrders(menuItems)">Delete</Button>
                        </div>
                    </div>
                </Panel>
            </div>
    </div>


    <div class="overlay" v-if="showOverlay">
        <div class="overlay-content">
            <h2>{{ editIndex === null ? 'Add Item' : 'Update Item' }}</h2>
            <form @submit.prevent="editIndex === null ? addReview() : updateReview()">
                <div class="form-group">
                    <label for="title">Category: </label>
                    <input type="text" id="title" v-model="titleValue" required />
                </div>
                <div class="form-group">
                    <label for="title">Name: </label>
                    <input type="text" id="title" v-model="titleValue" required />
                </div>
                <div class="form-group">
                    <label for="text">Price: </label>
                    <textarea id="text" v-model="reviewText" required></textarea>
                </div>
                <div class="form-group">
                    <label for="stars">Upload Image: </label>
                    <select id="stars" v-model="selectedStars" required>
                    </select>
                </div>
            </form>
            <div class="buttons">
                <button class="close-btn" @click="showOverlay = false">Close</button>
                <button class="add-review-btn-blue" @click="editIndex === null ? addReview() : updateReview()">{{ editIndex === null ? 'Add Review' : 'Update Review' }}</button>
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

const newReview = ref({
    category: "",
    name: "",
    price: "",
    samplepic: ""
});

const showOverlay = ref(false);

const editIndex = ref(null);

function addReview() {
    reviews.value.push(newReview.value);
    newReview.value = { text: "", stars: "", title: "" };
    showOverlay.value = false;
}

function editReview(index) {
    editIndex.value = index;
    showOverlay.value = true;
}

function updateReview() {
    reviews.value[editIndex.value] = {
        text: reviews.value[editIndex.value].text,
        stars: reviews.value[editIndex.value].stars,
        title: reviews.value[editIndex.value].title,
    };
    editIndex.value = null;
    showOverlay.value = false;
}

function deleteReview(index) {
    reviews.value.splice(index, 1);
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
.addBttn{
    margin-right: 10px;
}
.SortBy {
    margin-left: 20px;
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
.stars {
    font-size: 24px;
    margin-bottom: 10px;
}

.description {
    margin-bottom: 10px;
}

.product-title {
    font-weight: bold;
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

.add-review-btn-blue {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}

.edit-review-btn {
    background-color: #2196f3;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
}

.delete-review-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
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

.close-btn {
    margin-top: 20px;
    background-color: #f44336;
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
.form-group{
    margin-top: 20px;
}
</style>