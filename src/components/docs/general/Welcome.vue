<template>
    <hr />
    <br />
    
    <img src="@/static/logo.png" draggable="false" />
    <br />
    <br />

    <img
        src="https://nodei.co/npm/erax.db.png?downloads=true&downloadRank=true&stars=true"
        draggable="false"
    />
    <br />
    <img
        src="https://img.shields.io/npm/v/erax.db?color=%2351F9C0&label=erax.db"
        draggable="false"
    />
    <img
        src="https://img.shields.io/npm/dt/erax.db.svg?color=%2351FC0&maxAge=3600"
        draggable="false"
        style="margin-top: 4px"
    />

    <h1>Installation</h1>
    <p class="muted">Node.js 16 or newer is required.</p>
    <br />

    <Codeblock code="npm install erax.db" />

    <h1>Dependencies</h1>
    <ul style="list-style: inside" class="muted">
        <li style="margin-top: 0.5rem">
            <a href="https://www.npmjs.com/package/lodash" target="_blank">lodash</a>
        </li>
        <li style="margin-top: 0.5rem">
            <a href="https://www.npmjs.com/package/colorette" target="_blank">colorette</a>
        </li>
    </ul>

    <h1>Optional Packages</h1>
    <ul style="list-style: inside" class="muted">
        <li style="margin-top: 0.5rem">
            <a href="https://www.npmjs.com/package/mongoose" target="_blank"
                >mongoose <span class="muted">required for mongo database</span></a
            >
        </li>
        <li style="margin-top: 0.5rem">
            <a href="https://www.npmjs.com/package/bson" target="_blank"
                >bson <span class="muted">required for bson database</span></a
            >
        </li>
        <li style="margin-top: 0.5rem">
            <a href="https://www.npmjs.com/package/better-sqlite3" target="_blank"
                >better-sqlite3 <span class="muted">required for sqlite database</span></a
            >
        </li>
    </ul>

    <h1>Links</h1>
    <ul style="list-style: inside" class="muted">
        <li style="margin-top: 0.5rem">
            <a href="https://github.com/deliever42/erax.db" target="_blank">GitHub</a>
        </li>
        <li style="margin-top: 0.5rem">
            <a href="https://npmjs.com/package/erax.db" target="_black">NPM</a>
        </li>
    </ul>
    <br />
    <hr />

    <br />
    <br />
    <br />
    <br />
    <br />
</template>

<script lang="ts">
export default {
    name: 'Welcome'
};
</script>
