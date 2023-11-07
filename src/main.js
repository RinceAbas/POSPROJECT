import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App)
.use(router)
.use(PrimeVue, { ripple: true })
.component("Menubar", Menubar)
.mount('#app')