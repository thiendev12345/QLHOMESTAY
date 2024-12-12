import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    // {
    //     path: '/admin',
    //     component: () => import('../layout/wrapper/Admin.vue'),
    //     meta: { layout: 'default' },
    // },
    {
        path: '/admin/user',
        component: () => import('../components/Admin/DanhMuc/index.vue'),
        meta: { layout: 'default' },
    },
    {
        path: '/admin/caidat',
        component: () => import('../components/Admin/Caidat/index.vue'),
        meta: { layout: 'default' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router