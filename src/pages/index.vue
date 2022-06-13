<template>
    <div style="background-color: #5865f2">
        <div class="container text-center">
            <br />
            <br />
            <img src="@/static/logo.png" alt="EraxDB Logo" draggable="false" />
            <br />
            <br />
            <span style="background-color: #4752c4; border-radius: 8px; padding: 20px; color: white"
                >npm install erax.db

                <button
                    class="fa-solid fa-clipboard"
                    style="background-color: transparent; color: white; border: none"
                    @click="copy('npm install erax.db')"
                ></button>
            </span>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>

    <div class="container">
        <br />
        <h1>About</h1>
        <p class="muted">
            erax.db aims to use many database types in the easiest way. It has sqlite, bson, json,
            mongodb support.
        </p>

        <h1>Features</h1>
        <ul style="list-style: inside" class="muted">
            <li>Speedy and efficient</li>
            <li style="margin-top: 0.5rem">Feature-rich</li>
            <li style="margin-top: 0.5rem">Customizable</li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        async copy(str: string) {
            await navigator.clipboard.writeText(str);
            alert('Copied to clipboard');
        }
    }
};
</script>
