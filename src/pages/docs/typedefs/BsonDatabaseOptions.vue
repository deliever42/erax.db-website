<template>
    <hr />
    <br />

    <h1>Types</h1>
    <ul style="list-style: inside" class="muted">
        <li><a :href="DocHelper.object" target="_blank">Object</a></li>
    </ul>
    <br />
    <hr />

    <h1>Properties</h1>
    <div class="property-data" style="overflow-x: auto">
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
                    <td>cache</td>
                    <td>
                        <a :href="DocHelper.boolean" target="_blank">boolean</a>
                    </td>
                    <td><i class="fa-solid fa-check"></i></td>
                    <td>true</td>
                    <td>Whether the data will be cached</td>
                </tr>
                <tr>
                    <td>filePath</td>
                    <td>
                        <a :href="DocHelper.string" target="_blank">string</a>
                    </td>
                    <td><i class="fa-solid fa-check"></i></td>
                    <td>database.bson</td>
                    <td>File path for bson database</td>
                </tr>
                <tr>
                    <td>backup</td>
                    <td>
                        <a :href="getDocRoute('typedefs', 'BaseBackupOptions')" target="_blank"
                            >BaseBackupOptions</a
                        >
                    </td>
                    <td><i class="fa-solid fa-check"></i></td>
                    <td>{ enabled: false }</td>
                    <td>Backup system for bson database</td>
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
    name: 'BsonDatabaseOptions'
};
</script>
