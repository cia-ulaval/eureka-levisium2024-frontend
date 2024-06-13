import { createApp } from 'vue'
import axios from "axios";
import App from './App.vue'

axios.defaults.baseURL = "https://levisium-cia-bb1d6f904c9c.herokuapp.com/";
createApp(App).mount('#app')

