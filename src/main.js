import { createApp } from 'vue'
import axios from "axios";
import App from './App.vue'

axios.defaults.baseURL = "http://localhost:5000/";
createApp(App).mount('#app')

