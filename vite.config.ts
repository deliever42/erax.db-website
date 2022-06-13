import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        Vue(),
        Pages({
            pagesDir: [{ dir: resolve(__dirname, 'src', 'pages'), baseRoute: '/' }],
            extensions: ['vue']
        })
    ],
    root: './src/',
    publicDir: './src/static',
    build: {
        assetsDir: '_veiversa_studio',
        outDir: '../dist'
    },
    resolve: {
        alias: {
            '@/': './src/'
        }
    }
});
