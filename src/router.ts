import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import DocsHome from '@/pages/docs/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            component: Home,
            path: '/'
        },
        {
            name: 'Documentation',
            component: DocsHome,
            path: `/documentation/:category?/:page?`
        },
        {
            name: 'NotFound',
            component: NotFound,
            path: '/:catchAll(.*)'
        }
    ]
});

export default router;
