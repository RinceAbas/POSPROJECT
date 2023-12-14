<template>
    <h1>Inventory</h1>
    <div class="addBttn">
        <div class="SortBy">
            <button class="add-review-btn" @click="showOverlay = true">Add Item</button>
        </div>  
    </div>
        <div class="reviews">
            <div class="review-container" v-for="(review, i) in reviews" :key="i">
                <Panel :header="review.title" toggleable>
                    <div class="review">
                        <div class="stars">{{ review.stars }}</div>
                        <div class="description">{{ review.text }}</div>
                        <div class="buttons">
                            <button class="edit-review-btn" @click="editReview(i)">Edit</button>
                            <button class="delete-review-btn" @click="deleteReview(i)">Delete</button>
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


const reviews = ref([
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 1",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 2",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 3",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 4",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 5",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 6",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 6",
    },
    {
        text: "Price: 60",
        stars: "",
        title: "Product Title 6",
    },

]);

const newReview = ref({
    text: "",
    stars: "",
    title: "",
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
.addBttn {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 40px;
    margin-top: 20px;
}

.SortBy {
    margin-left: 20px;
}


.reviews {
    margin-top: 20px; margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.review-container{
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