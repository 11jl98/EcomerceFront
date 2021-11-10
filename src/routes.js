import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/pages/Home/Page-Home.vue'
import Schedule from '../src/pages/Schedule/Page-Schedule.vue'
import Costumer from '../src/pages/Costumer/Page-Costumer.vue'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Agenda',
        component: Schedule
    },
    {
        path: '/Clientes',
        component: Costumer
    },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;