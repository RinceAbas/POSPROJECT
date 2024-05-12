    <template>
        <Navbar/>
        <div class="line"> </div>
    <div class="pageBody">   

        <div class="categories">
            <div class="all">
                <Button outlined class="border-all" raised severity="secondary" @click="showAll">
                    <img src="../assets/all.jpg" alt="Image" width="100" height="80"/>
                </Button>
                <p>All</p>
            </div>
            <div class="meals">
                <Button outlined class="border-meals" raised severity="secondary" @click="showMeals">
                    <img src="../assets/meals.jpg" alt="Image" width="100" height="80"/>
                </Button>
                <p>Meals</p>
            </div>
            <div class="drinks">
                <Button outlined class="border-drinks" raised severity="secondary" @click="showDrinks">
                    <img src="../assets/drinks.jpg" alt="Image" width="100" height="80"/>
                </Button>
                <p>Drinks</p>
            </div>
            <div class="snacks">
                <Button outlined class="border-snacks" raised severity="secondary" @click="showSnacks">
                    <img src="../assets/snacks.jpg" alt="Image" width="100" height="80" />
                </Button>
                <p>Snacks</p>
            </div>
            <div class="deserts">
                <Button outlined class="border-deserts" raised severity="secondary" @click="showDeserts">
                    <img src="../assets/desserts.jpg" alt="Image" width="100" height="80" />
                </Button>
                <p>Desserts</p>
            </div>
        </div>
        <div class="body">
        </div>
        <div class="menuBody">
            <div class="menu-container" v-for="(menuItems, i) in menuItems" :key="i">
                <Panel :header="menuItems.category">
                    <div class="menuItems">
                        <div class="itemPic">
                            <img :src="menuItems.samplepic" alt="Image" width="100" height="80" />
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
        <div class="doneIcon">
            <Button icon="pi pi-check-square" class="doneOrderBttn" style="font-size: 100rem" @click="showOrderBox = true"/>
        </div>
        <div v-if="showOrderBox" class="orderBox">
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
            <Button label="Danger" severity="danger" raised class="clearCBttn" @click="showOrderBox = false">Cancel</Button>
        </div>        
        </div>

        <div v-if="showOverlay" class="overlay">
            <div class="overlay-content">
                <h3>Payment Method</h3>
                <Button label="Cash" class="cashBttn" @click="doneTransaction('Cash')" />
                <Button label="Gcash" class="onlineBttn" @click="doneTransaction('Gcash')" />
                <Button label="Tally" class="onlineBttn" @click="doneTransaction('Tally')" />
                <Button label="Cancel" severity="danger" class="cancelCBttn" @click="showOverlay = false"></Button> 
            </div>
        </div>

        
    </template>

    <script setup>
    import Navbar from './Navbar.vue';
    import Button from 'primevue/button';
    import 'primeicons/primeicons.css'
    import Panel from 'primevue/panel'; 
    import axios from 'axios';



    import { ref, computed, onMounted } from "vue";

    const visible = ref(false);
    const showOverlay = ref(false);
    const showOrderBox = ref(false);
    const handlePayment = (method) => {
        orders.value = [];
    };988
    
    const menuItems = ref([]);
    const orders = ref([]);
    

    onMounted(() => {
    menuItems.value = fetchMenuItems();
    });

    async function fetchMenuItems() {
        try {   
            const response = await axios.get('http://localhost:8000/api/menu/');
            menuItems.value = response.data.map(item => ({
            category: item.menuItemCategory,
            name: item.menuItemName,
            price: item.menuItemPrice,
            samplepic: item.menuItemPic // Assuming 'samplepic' is the property name for the picture
        }));
            } catch (error) {
            console.error('Error fetching menu items:', error);
            }

    }
    
    function doneTransaction(orderType) {
    const formData = new FormData();
    formData.append('order_items', JSON.stringify(orders.value));
    formData.append('order_type', orderType);
    formData.append('order_total', calculateTotal());

    axios.post('http://localhost:8000/api/orders/', formData)
        .then(response => {
            // Handle success
            showOverlay.value = false;
            orders.value = [];
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    showOrderBox.value = false;
    showOverlay.value = false;
}

    function addToOrder(menuItem) {
        const existingOrder = orders.value.find(order => order.name === menuItem.name);
        if (existingOrder) {
            existingOrder.quantity++;
        } else {
            orders.value.push({ ...menuItem, quantity: 1 });
        }
        console.log(orders.value)
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
        showOrderBox.value = false;
        showOverlay.value = false;
    }
    async function showAll() {
        try {
            const response = await axios.get('http://localhost:8000/api/menu/');
            menuItems.value = response.data.map(item => ({
            category: item.menuItemCategory,
            name: item.menuItemName,
            price: item.menuItemPrice,
            samplepic: item.menuItemPic
        }));
            } catch (error) {
            console.error('Error fetching menu items:', error);
            }
    }
    async function showMeals() {
        try {
            const response = await axios.get('http://localhost:8000/api/menu/showmeals');
            menuItems.value = response.data.map(item => ({
            category: item.menuItemCategory,
            name: item.menuItemName,
            price: item.menuItemPrice,
            samplepic: item.menuItemPic
        }));  
            } catch (error) {
            console.error('Error fetching menu items:', error);
            }
    }
    async function showDrinks() {
        try {
            const response = await axios.get('http://localhost:8000/api/menu/showdrinks');
            menuItems.value = response.data.map(item => ({
            category: item.menuItemCategory,
            name: item.menuItemName,
            price: item.menuItemPrice,
            samplepic: item.menuItemPic
        }));  
            } catch (error) {
            console.error('Error fetching menu items:', error);
            }
    }
    async function showSnacks() {
        try {
            const response = await axios.get('http://localhost:8000/api/menu/showsnacks');
            menuItems.value = response.data.map(item => ({
            category: item.menuItemCategory,
            name: item.menuItemName,
            price: item.menuItemPrice,
            samplepic: item.menuItemPic
        }));  
            } catch (error) {
            console.error('Error fetching menu items:', error);
            }
    }
    async function showDeserts() {
        try {
            const response = await axios.get('http://localhost:8000/api/menu/showdesserts');
            menuItems.value = response.data.map(item => ({
            category: item.menuItemCategory,
            name: item.menuItemName,
            price: item.menuItemPrice,
            samplepic: item.menuItemPic
        }));  
            } catch (error) {
            console.error('Error fetching menu items:', error);
            }
    }
    </script>

    <style scoped>
    body{
        background-color: rgba(236, 146, 174, 0.5); 
    }
    .pageBody{
        margin-right: 450px;
        background-color: rgba(239, 197, 210, 0.5);
    }
    .line{
        border: 2.5px solid #000000;
        margin-bottom: 10px
    }
    .categories{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
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
        margin-bottom: 20px;
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
    
    .orderBox {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px; /* Increase padding for bigger size */
        margin: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white; /* Adjust background color */
    }

    .totalBoxTop {
        text-align: center;
    }
    .orderInfo {
        margin-top: 20px;
    }

    .calculateTotal {
        margin-top: 20px;
    }

    .bottomBttn {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .clearCBttn {
        margin-left: 10px;
    }
    .pageBody {
        margin-right: 0px; /* Adjust margin-right for spacing */
        margin-left: 0px; /* Add margin-left for spacing */
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
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        margin-left: 35px;
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
    }
    .onlineBttn{
        margin-right: 10px;
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
    .onlineBttn{
        margin-right: 10px;
        border-color: #EC92AE;
        background-color: white;
        color: #000000;
        border-width: 2px;
        transition: background-color 0.3s ease;
    }
    .doneOrderBttn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: white;
        border-color: #EC92AE;
        border-style: double;
        border-radius: 50%;
        border-style: solid;
        color: #000000;
        box-shadow: none;
        width: 80px;
        height: 80px;
        transition: background-color 0.3s ease;
    }
    .onlineBttn:hover{
        background-color: #F7D3DE;
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
    </style>
