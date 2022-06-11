<template>
    <br />
    <hr />
    <h1>Properties</h1>
    <p class="property">.cache</p>
    <div class="property-data">
        <p class="muted">The cache</p>
        <br />
        <p class="muted">
            Type:
            <a>{ [key: <a :href="DocHelper.string" target="_blank">string</a>]: V }</a>
        </p>
    </div>

    <br />
    <hr />

    <h1>Methods</h1>
    <p class="property">.toJSON()</p>

    <div class="property-data">
        <p class="muted">Get the all class properties</p>
        <br />

        <p class="muted">
            Returns:
            <a
                >{ [prop: <a :href="DocHelper.string" target="_blank">string</a>]:
                <a :href="DocHelper.any" target="_blank">any</a> }</a
            >
        </p>
    </div>

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
    name: 'BaseDatabase<V>'
};
</script>
