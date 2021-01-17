import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// import Main from './pages/main.vue';
import App from './App.vue';

import axios  from 'axios';

const app = createApp(App);
// const Home = app.component('home', {
//     template:`
//       <h2>test hoem</h2>
    
//     `,
//     data:function(){
//         return {};
//     }
// });

const { routes } = require('./routes.js');
// const  routes  =  [{ path:'/',component: Home},
// { path: '/home', component: Main }];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
app.use(router);

app.provide('auth',{
   'X_LC_ID': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
   'X_LC_KEY':'GJnJ1a8KVnaVLquMKj6uSllD'
});
app.provide('urls',{
    login: 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/login',
    sign: 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/users',
    classes: 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/classes/',
});

const instance = axios.create({
    withCredentials: false,
    baseURL: '/api',
    headers: {
        'Content-type': 'application/json',
        'X_LC_ID': 'awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz',
        'X_LC_KEY':'GJnJ1a8KVnaVLquMKj6uSllD'
    }
});
app.provide('http',instance);
app.mount('#app')
