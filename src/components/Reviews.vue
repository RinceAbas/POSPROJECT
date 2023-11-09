<script setup>
import Dropdown from "primevue/dropdown";
import Panel from "primevue/panel";
import { ref, computed } from 'vue';

const sb = ref({
    date: [
        { name: "Today", code: "TD" },
        { name: "Yesterday", code: "Y" },
        { name: "This Week", code: "TW" },
        { name: "This Month", code: "TM" },
    ],
    name: [
        { name: "A-Z", code: "AZ" },
        { name: "Z-A", code: "ZA" },
    ],
    product: [
        { name: "Electronics", code: "E" },
        { name: "Clothing", code: "C" },
        { name: "Home Goods", code: "HG" },
    ],
    price: [
        { name: "Low to High", code: "LH" },
        { name: "High to Low", code: "HL" },
    ],
});

const sorts = ref({
    date: null,
    name: null,
    product: null,
    price: null,
});

const reviews = computed(() => {
    return [
      {
        text: "This is a great product!",
        stars: "★★★★★",
        title: "Product Title 1",
      },
      {
        text: "I love this product!",
        stars: "★★★★",
        title: "Product Title 2",
      },
      {
        text: "This product is amazing!",
        stars: "★★★",
        title: "Product Title 3",
      },
      {
        text: "This is a great product!",
        stars: "★★★★★",
        title: "Product Title 4",
      },
      {
        text: "I love this product!",
        stars: "★★★★",
        title: "Product Title 5",
      },
      {
        text: "This product is amazing!",
        stars: "★★★",
        title: "Product Title 6",
      }
    ];
});
</script>

<template>
    <div class="container">
        <h1>Reviews</h1>
        <div class="SortBy">
            <Dropdown
                v-model="sorts.date"
                :options="sb.date"
                optionLabel="name"
                placeholder="Sort By Date"
                class="w-full md:w-14rem"
            />
        </div>
        <div class="SortBy">
            <Dropdown
                v-model="sorts.name"
                :options="sb.name"
                optionLabel="name"
                placeholder="Sort By Name"
                class="w-full md:w-14rem"
            />
        </div>
        <div class="SortBy">
            <Dropdown
                v-model="sorts.product"
                :options="sb.product"
                optionLabel="name"
                placeholder="Sort By Product"
                class="w-full md:w-14rem"
            />
        </div>
        <div class="SortBy">
            <Dropdown
                v-model="sorts.price"
                :options="sb.price"
                optionLabel="name"
                placeholder="Sort By Price"
                class="w-full md:w-14rem"
            />
        </div>
    </div>
    <div class="reviews">
        <div class="row">
            <div class="col-md-4" v-for="(review, i) in reviews" :key="i">
                <Panel :header="review.title">
                    <div class="review">
                        <div class="stars">{{ review.stars }}</div>
                        <div class="description">{{ review.text }}</div>
                        <div class="product-title">{{ review.title }}</div>
                    </div>
                </Panel>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 20px;
}

.reviews{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    margin: 0;
}

.SortBy {
    margin-left: 20px;
}

.reviews {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
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

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-md-4 {
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 20px;
}

@media (min-width: 768px) {
    .col-md-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
}
</style>
