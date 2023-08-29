import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)
import router from "./router/router.js";

app.use(router)
app.use(pinia)
app.mount('#app')