<template>
    <br />
    <hr />

    <h1>Methods</h1>
    <div style="display: flex">
        <span class="badge">static</span>
        <p class="property">.stringify(type, obj, space)</p>
    </div>

    <div class="property-data">
        <p class="muted">Stringify the data</p>
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
                        <td>type</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The type of the object</td>
                    </tr>
                    <tr>
                        <td>obj</td>
                        <td>
                            <a :href="DocHelper.any" target="_blank">any</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The object</td>
                    </tr>
                    <tr>
                        <td>space</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>4</td>
                        <td>The space of the object</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a :href="DocHelper.string" target="_blank">string</a></p>
    </div>

    <br />
    <hr />
    <br />
    <div style="display: flex">
        <span class="badge">static</span>
        <p class="property">.parse(type, obj)</p>
    </div>

    <div class="property-data">
        <p class="muted">Parse the data</p>
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
                        <td>type</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The type of the object</td>
                    </tr>
                    <tr>
                        <td>obj</td>
                        <td>
                            <a :href="DocHelper.any" target="_blank">any</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The object</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a :href="DocHelper.any" target="_blank">any</a></p>
    </div>

    <br />
    <hr />
    <br />
    <div style="display: flex">
        <span class="badge">static</span>
        <p class="property">.write&#60;V&#62;(type, filePath, obj, space)</p>
    </div>

    <div class="property-data">
        <p class="muted">Write the data</p>
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
                        <td>type</td>
                        <td>
                            <a>bson | json</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The type of the file</td>
                    </tr>
                    <tr>
                        <td>filePath</td>
                        <td>
                            <a :href="DocHelper.string">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The file path for write data</td>
                    </tr>
                    <tr>
                        <td>obj</td>
                        <td>
                            <a
                                >{ [key: <a :href="DocHelper.string" target="_blank">string</a>]: V
                                }</a
                            >
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The object</td>
                    </tr>
                    <tr>
                        <td>space</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>4</td>
                        <td>The space of the file</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a :href="DocHelper.void" target="_blank">void</a></p>
    </div>

    <br />
    <hr />
    <br />
    <div style="display: flex">
        <span class="badge">static</span>
        <p class="property">.read&#60;V&#62;(type, filePath)</p>
    </div>

    <div class="property-data">
        <p class="muted">Read the data</p>
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
                        <td>type</td>
                        <td>
                            <a>bson | json</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The type of the file</td>
                    </tr>
                    <tr>
                        <td>filePath</td>
                        <td>
                            <a :href="DocHelper.string">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The file path for read data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns: <a>{ [key: <a :href="DocHelper.string" target="_blank">string</a>]: V }</a>
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
    name: 'Utils'
};
</script>
