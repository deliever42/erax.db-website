import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [Vue()],
    root: './src',
    publicDir: './src/static',
    build: {
        assetsDir: '_veiversa_studio',
        outDir: '../dist'
    },
    resolve: {
        alias: {
            '@/': './src/'
        }
    },
    optimizeDeps: {
        include: ['vue', 'vue-router'],
        exclude: ['vue-demi']
    }
});