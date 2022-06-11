<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<script lang="ts">
import Vue from 'vue';
export default {
    name: 'Navbar'
};
</script>

<template>
    <nav class="navbar">
        <a href="index.html" class="nav-brand">Erax.DB</a>
        <div class="nav-items">
            <RouterLink to="/" class="nav-item">Home</RouterLink>
            <RouterLink to="/docs" class="nav-item">Documentation</RouterLink>
            <a href="https://github.com/deliever42/erax.db" class="nav-item" target="_blank"
                >GitHub</a
            >
            <a href="https://www.npmjs.com/package/erax.db" class="nav-item" target="_blank">NPM</a>
            <a href="https://discord.gg/abShf5ta3c" class="nav-item" target="_blank">Support</a>
        </div>
    </nav>
</template>
