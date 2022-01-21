import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Editor',
        component: () => import('./editor.vue')
    },
    {
        path: '/View',
        name: 'View',
        component: () => import('./view.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
