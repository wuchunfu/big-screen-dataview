import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Editor',
        component: () => import('./editor.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
