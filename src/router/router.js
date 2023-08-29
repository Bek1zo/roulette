import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('/src/views/Roulette.vue'),
        },
        {
            path: '/test',
            component: () => import('/src/views/Test.vue'),
        },
    ],
})
