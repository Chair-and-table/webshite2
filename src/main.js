import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App)
    .mount('#app')
    .use(router)