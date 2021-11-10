import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/pages/Home/Page-Home.vue'
import Schedule from '../src/pages/Schedule/Page-Schedule.vue'

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
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;