    <template>

    <div class="pageBody">    
        <div class="Header">
        <h2>Categories</h2>
        </div>

        <div class="categories">
            <div class="all">
                <Button outlined class="border-all" raised severity="secondary" text>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>All</p>
            </div>
            <div class="meals">
                <Button outlined class="border-meals" raised severity="secondary" text>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Meals</p>
            </div>
            <div class="drinks">
                <Button outlined class="border-drinks" raised severity="secondary" text>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Drinks</p>
            </div>
            <div class="snacks">
                <Button outlined class="border-snacks" raised severity="secondary" text>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Snacks</p>
            </div>
            <div class="deserts">
                <Button outlined class="border-deserts" raised severity="secondary" text>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Desserts</p>
            </div>
        </div>
        <div class="body">
            <h2>Menu</h2>
        </div>
        <div class="menuBody">
            <div class="menu-container" v-for="(menuItems, i) in menuItems" :key="i">
                <Panel :header="menuItems.category">
                    <div class="menuItems">
                        <div class="itemPic">
                            <Image :src="menuItems.samplepic" alt="Item Image" width="100" />
                        </div>
                        <div class="name">{{ menuItems.name }}</div>
                        <div class="price">₱{{ menuItems.price }}</div>
                        <div class="buttons">
                            <Button icon="pi pi-plus" severity="secondary" aria-label="Bookmark" class="plusOrder" @click="addToOrder(menuItems)"></Button>
                            <Button icon="pi pi-minus" severity="secondary" aria-label="Bookmark" class="minusOrder" @click="removeFromOrder(menuItems)"> </Button>
                        </div>
                    </div>
                </Panel>
            </div>
            </div>
        </div>    
        <div class="totalBoxTop"><h1>Orders</h1></div>
        <div class="orderInfo">
                    <div v-for="(order, index) in orders" :key="index">
                        <div>{{ order.name }}</div>
                        <div>₱{{ order.price }}</div>
                        <div>{{ order.quantity }}</div>
                    </div>
                </div>

        <div class="calculateTotal"><h2>Total: {{ calculateTotal() }}</h2></div>
        <div class="bottomBttn">
            <Button label="Secondary" severity="secondary" raised class="doneCBttn" @click="doneOrders">Done</Button>
            <Button label="Danger" severity="danger" raised class="clearCBttn" @click="clearOrders(menuItems)">Clear</Button>
        </div>        
    </template>

    <script setup>
    import Image from 'primevue/image';
    import Button from 'primevue/button';
    import 'primeicons/primeicons.css'
    import Panel from 'primevue/panel';


    import { ref, computed } from "vue";

    const visible = ref(false);

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

    const orders = ref([]);


    function addToOrder(menuItem) {
        const existingOrder = orders.value.find(order => order.name === menuItem.name);
        if (existingOrder) {
            existingOrder.quantity++;
        } else {
            orders.value.push({ ...menuItem, quantity: 1 });
        }
    }

    function removeFromOrder(menuItem) {
        const existingOrder = orders.value.find(order => order.name === menuItem.name);
        if (existingOrder) {
            existingOrder.quantity--;
            if (existingOrder.quantity === 0) {
                orders.value.splice(orders.value.indexOf(existingOrder), 1);
            }
        }
    }

    function calculateTotal() {
        let total = 0;
        for (const order of orders.value) {
            total += parseInt(order.price) * order.quantity;
        }
        return total;
    }

    function doneOrders() {
            
    }

    function clearOrders() {
        orders.value = [];
    }
    </script>

    <style scoped>
    .Header {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 60px;
        border-radius: 10px;
        margin: 10px;
        margin-left: 30px;
    }
    .categories{
        display: inline-flex;
        margin-left: 100px;
    }
    .all{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    .meals{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    .drinks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    .snacks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    .deserts{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    .body {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 60px;
        border-radius: 10px;
        margin: 10px;   
        margin-left: 30px;
    }
    .menuBody{
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
    .itemPic{
        margin-bottom: 10px;
    }
    .plusOrder {
        justify-content: center;
        border-radius: 5px;
        margin-top: 10px;
        margin-right: 5px;
    }
    .totalBoxTop{
        position: fixed;
        top: 0;
        right: 0;
        padding: 10px;
        border-radius: 5px;
        margin-right: 9.4px;
        margin-top: 77px;
        margin-bottom: 10px;
        left: 1050px;
        bottom: 1000px;
        text-align: center;
    }
    .orderInfo{
        position: fixed;
        top: 0;
        right: 0;
        padding: 10px;
        border-radius: 5px;
        margin-right: 9.4px;
        margin-top: 150px;
        margin-bottom: 10px;
        left: 1050px;
        bottom: 1000px;
    }
    .calculateTotal{
        position: fixed;
        top: 0;
        right: 0;
        padding: 10px;
        border-radius: 5px;
        margin-right: 9.4px;
        margin-top: 650px;
        margin-bottom: 10px;
        left: 1050px;
        bottom: 1000px;
    }
    .bottomBttn{
        position: fixed;
        top: 0;
        right: 0;
        padding: 10px;
        border-radius: 5px;
        margin-right: 9.4px;
        margin-left: 260px;
        margin-top: 665px;
        margin-bottom: 10px;
        left: 1050px;
        bottom: 1000px;
    }
    .clearCBttn{
        margin-left: 10px;
    }
    .pageBody{
        background-color: #EFC5D2;
        margin-right: 450px;
        border-radius: 10px;
    }
    </style>
