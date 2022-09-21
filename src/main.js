import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import Countries from '../views/Countries.vue'
import DetailsPage from '../views/DetailsPage.vue'

const routes = [
    {
        path: '/',
        component: Countries,
        name: 'Countries'
    },
    {
        path: '/details',
        component: DetailsPage,
        name: 'DetailsPage'
    }
];

const router = new createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
