// require("./bootstrap");

import './bootstrap';
// import '@mdi/font/css/materialdesignicons.css'

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
import Task from './components/Task.vue';
app.component('task', Task);
import Memo from './components/Memo.vue';
app.component('memo', Memo);
import Calendar from './components/Calendar.vue';
app.component('calendar', Calendar);

// app.use(router);
app.use(vuetify);
app.mount("#app");