import { createApp } from "vue";
import { createPinia } from "pinia";


import App from "./App.vue";
import router from "./router";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons
import "primeflex/primeflex.css"

import "./assets/main.css";


const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia());
app.use(router);
app.component('Button',Button)

app.mount("#app");

