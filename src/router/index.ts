import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SetUpView from '../views/SetUpView.vue'
import WebStoreView from '../views/WebStoreView.vue'
import RustCalculator from '../views/RustCalculator.vue'
import Alienware from '../views/Alienware.vue'
import MusicView from '../views/MusicView.vue'
import Rap from '../views/Rap.vue'
import Reggaeton from '../views/Reggaeton.vue'
import Nineties from '../views/Nineties.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    },
    {
        path: '/setup',
        name: 'SetUpView',
        component: SetUpView
    },
    {
        path: '/webstore',
        name: 'WebStoreView',
        component: WebStoreView
    },
    {
        path: '/rustcalculator',
        name: 'RustCalculator',
        component: RustCalculator
    },
    {
        path: '/alienware',
        name: 'Alienware',
        component: Alienware
    },
    {
        path: '/music',
        name: 'MusicView',
        component: MusicView
    },
    {
        path: '/rap',
        name: 'Rap',
        component: Rap
    },
    {
        path: '/reggaeton',
        name: 'Reggaeton',
        component: Reggaeton
    },
    {
        path: '/nineties',
        name: 'Nineties',
        component: Nineties
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router

