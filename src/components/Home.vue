    <template>
        <Navbar/>
        <div class="line"> </div>

    <div class="pageBody">

        <div class="categories">
            <div class="all">
                <Button outlined class="border-all" raised severity="secondary" @click="showAll">
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>All</p>
            </div>
            <div class="meals">
                <Button outlined class="border-meals" raised severity="secondary" @click="showMeals">
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Meals</p>
            </div>
            <div class="drinks">
                <Button outlined class="border-drinks" raised severity="secondary" @click="showDrinks">
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Drinks</p>
            </div>
            <div class="snacks">
                <Button outlined class="border-snacks" raised severity="secondary" @click="showSnacks">
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Snacks</p>
            </div>
            <div class="deserts">
                <Button outlined class="border-deserts" raised severity="secondary" @click="showDeserts">
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" />
                </Button>
                <p>Desserts</p>
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

        <div class="calculateTotal"><h2>Total: ₱{{ calculateTotal() }}</h2></div>
        <div class="bottomBttn">
            <Button label="Secondary" severity="secondary" raised class="doneCBttn" @click="showOverlay = true">Done</Button>
            <Button label="Danger" severity="danger" raised class="clearCBttn" @click="clearOrders(menuItems)">Clear</Button>
        </div>        

        <div v-if="showOverlay" class="overlay">
            <div class="overlay-content">
                <h3>Payment Method</h3>
                <Button label="Cash" class="cashBttn" @click="showOverlay = false" />
                <Button label="Gcash" class="onlineBttn" @click="showOverlay = false" />
                <Button label="Cancel" severity="danger" class="cancelCBttn" @click="showOverlay = false"></Button> 
            </div>
        </div>

        
    </template>

    <script setup>
    import Navbar from './Navbar.vue';
    import Image from 'primevue/image';
    import Button from 'primevue/button';
    import 'primeicons/primeicons.css'
    import Panel from 'primevue/panel'; 



    import { ref, computed } from "vue";

    const visible = ref(false);
    const showOverlay = ref(false);
    const handlePayment = (method) => {
        orders.value = [];
    };


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
    const sortedMenuItems = computed(() => {
            return menuItems.value.sort((a, b) => a.category.localeCompare(b.category));
            });

    const orders = ref([]);
    const menuAll = ref([]);
    const menuMeals = ref([]);
    const menuDrinks = ref([]);
    const menuSnacks = ref([]);
    const menuDesserts = ref([]);        

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
    function clearOrders() {
        orders.value = [];
    }
    function showAll() {
        menuItems.value = sortedMenuItems.value;
    }
    function showMeals() {
        menuItems.value = sortedMenuItems.value.filter(menuItem => menuItem.category === "Meal");
    }
    function showDrinks() {
        menuItems.value = sortedMenuItems.value.filter(menuItem => menuItem.category === "Drinks");
    }
    function showSnacks() {
        menuItems.value = sortedMenuItems.value.filter(menuItem => menuItem.category === "Snacks");
    }
    function showDeserts() {
        menuItems.value = sortedMenuItems.value.filter(menuItem => menuItem.category === "Deserts");
    }
    </script>

    <style scoped>
    body{
        background-color: rgba(236, 146, 174, 0.5); 
    }
    .line{
        border: 2.5px solid #000000;
    }
    .Header {
        margin-left: 30px;
    }
    .categories{
        display: inline-flex;
        margin-left: 70px;
        margin-top: 50px;
    }
    .all{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
        
    }
    .meals{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
    .drinks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
    .snacks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
    .deserts{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
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
        margin-right: 20px;
    }
    .menu-container{
        width: 400px;
        margin: 40px 40px;
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
        border-radius: 10px;
        margin-left: 100px;
        margin-top: 70px;
        margin-bottom: 50px;
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
        margin-top: 130px;
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
        margin-left: 90px;
        margin-top: 790px;
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
        margin-left: 354px;
        margin-top: 665px;
        margin-bottom: 10px;
        left: 1050px;
        bottom: 1000px;
    }
    .clearCBttn{
        margin-left: 10px;
        margin-top: 140px;
    }
    .pageBody{
        margin-right: 450px;
        background-color: rgba(239, 197, 210, 0.5);
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
    }
    .overlay-content {
        width: 400px;
        height: 150px;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
    }
    .overlay-button{
        position: absolute;
        margin-top:45px;
        margin-left: 60px;
    }
    .payment{
        position: absolute;
        margin-top: -15px;
        margin-left: -10px;
        font-size: 18px;
        
    }
    .doneCBttn{
        background-color: white;
        border-color: #EC92AE;
        border-style: double;
        border-radius: 7px;
        border-style: solid;
        color: #000000;
        box-shadow: none;
        transition: background-color 0.3s ease;
    }
    .doneCBttn:hover{
    background-color: #EC92AE;
    }
    .clearCBttn{
        background-color: white;
        border-color: #EC92AE;
        border-style: double;
        border-radius: 7px;
        border-style: solid;
        color: #000000;
        box-shadow: none;
        transition: background-color 0.3s ease;
    }
    .clearCBttn:hover{
    background-color: #EC92AE;
    }
    .cashBttn{
        margin-right: 10px;
        border-color: #EC92AE;
        background-color: white;
        color: #000000;
        border-width: 2px;
        transition: background-color 0.3s ease;
    }
    .cashBttn:hover{
    background-color: #F7D3DE;
    }
    .onlineBttn{
        margin-right: 10px;
        border-color: #EC92AE;
        background-color: white;
        color: #000000;
        border-width: 2px;
        transition: background-color 0.3s ease;
    }
    .onlineBttn:hover{
    background-color: #F7D3DE;
    }
    .cancelCBttn{
        border-color: #b91143;
        background-color: white;
        color: #000000;
        border-width: 2px;
        transition: background-color 0.3s ease;
    }
    .cancelCBttn:hover{
    background-color: #b5395e;
    }
    .orderInfo1{
        margin-left: 50px;
        margin-top: 30px;
    }
    .orderName{
        margin-left: 50px;
    }
    .orderPrice{
        margin-left: 50px;
    }
    .orderQuantity{
        margin-left: 50px;
    }
    </style>
