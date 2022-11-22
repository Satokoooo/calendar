// require("./bootstrap");

import './bootstrap';

import "vuetify/styles";
import {createVuetify} from 'vuetify';

// import router from "./route";
import { createApp } from 'vue';
// import App from './App.vue';

const vuetify = createVuetify();
window.Vue = require('vue');
const app = createApp({});

import Test from './components/Test.vue';
app.component('test', Test);

// app.use(router);
app.use(vuetify);
app.mount("#app");