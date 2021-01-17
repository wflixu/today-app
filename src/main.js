import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';


import App from './App.vue';

import axios  from 'axios';

const app = createApp(App);

const { routes } = require('./routes.js');

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
app.use(router);


const instance = axios.create({
    withCredentials: false,
    baseURL: '/api',
    // 更新实际id
    headers: {
        'Content-type': 'application/json',
        'X-LC-Id': 'awgkVY8ddXvUY5oWtvmzRH6ylj-gzGzoHsz',
        'X-LC-Key':'GJnJ1a8KVnbbaVLquMKj6uSllD'
    },
});
app.provide('http',instance);
app.mount('#app')
