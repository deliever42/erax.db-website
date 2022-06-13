<template>
    <hr />
    <br />

    <h1>Types</h1>
    <ul style="list-style: inside" class="muted">
        <li><a :href="DocHelper.string" target="_blank">string</a></li>
    </ul>
    <br />
    <hr />

    <h1>Properties</h1>
    <div class="property-data"></div>
    <ul style="list-style: inside" class="muted">
        <li><a>+</a></li>
        <li style="margin-top: 0.5rem"><a>-</a></li>
        <li style="margin-top: 0.5rem"><a>*</a></li>
        <li style="margin-top: 0.5rem"><a>**</a></li>
        <li style="margin-top: 0.5rem"><a>/</a></li>
        <li style="margin-top: 0.5rem"><a>%</a></li>
    </ul>
    <br />
    <hr />
</template>

<script setup lang="ts">
import $ from 'jquery';

import Codeblock from '@/components/Codeblock.vue';

import DocHelper from '@/doc_helper.json';
import docs from '@/docs.json';

const getDocRoute = (c: string, p: string) => {
    return (docs as any)[c].find((doc: any) => doc.name === p)?.to;
};
</script>

<script lang="ts">
export default {
    name: 'Operators'
};
</script>
