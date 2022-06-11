<template>
    <div style="border-radius: 5px; overflow-x: auto">
        <highlightjs autodetect :code="code" />
    </div>
</template>

<style>
.hljs {
    background: linear-gradient(to left, #1d1d1d 0.1%, #232323 100%);
}
</style>

<script setup lang="ts">
const { code } = defineProps(['code']);
</script>

<script lang="ts">
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

export default {
    components: {
        highlightjs: hljsVuePlugin.component
    }
};
</script>
