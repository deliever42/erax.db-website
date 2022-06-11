import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/404.vue';
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
            name: 'Docs',
            component: DocsHome,
            path: `/docs/:category?/:page?`
        },
        {
            name: '404',
            component: NotFound,
            path: '/:catchAll(.*)'
        }
    ]
});

export default router;
