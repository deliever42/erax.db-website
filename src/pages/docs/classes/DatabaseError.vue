<template>
    <h2 class="muted">
        extends
        <a :href="DocHelper.Error" target="_blank">Error</a>
    </h2>
    <br />
    <hr />
    <h1>Constructor</h1>
    <Codeblock code="new EraxDB.DatabaseError(message)" />
    <br />
    <div style="overflow-x: auto">
        <table>
            <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Optional</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>message</td>
                    <td>
                        <a :href="DocHelper.string" target="_blank">string</a>
                    </td>
                    <td><i class="fa-solid fa-xmark"></i></td>
                    <td><i class="fa-solid fa-xmark"></i></td>
                    <td>The error message</td>
                </tr>
            </tbody>
        </table>
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
    name: 'DatabaseError'
};
</script>
