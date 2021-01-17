
import Main from './pages/main.vue';
import My from './pages/my.vue';
import Login from './pages/login';
import Record from './pages/record';
// import App from './App.vue';


export const routes = [
    // { path:'/',component: App},
    { path: '/', component: Main },
    { path: '/login', component: Login },
    { path: '/record', component: Record },
    { path: '/my', component: My },
];



