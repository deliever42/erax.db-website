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
            path: '/erax.db-website/'
        },
        {
            name: 'Docs',
            component: DocsHome,
            path: `/erax.db-website/docs/:category?/:page?`
        },
        {
            name: '404',
            component: NotFound,
            path: '/erax.db-website/:catchAll(.*)'
        }
    ]
});

export default router;
