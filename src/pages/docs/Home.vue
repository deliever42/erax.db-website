<template>
    <div class="sidebar">
        <button
            class="menu"
            @click="toggleSidebar()"
            style="background-color: #4752c4; border-bottom-right-radius: 8px; padding: 10px"
        >
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="sidebar-items" aria-expanded="false">
            <button
                class="menu"
                @click="toggleSidebar()"
                style="position: absolute; right: 0; margin-right: 10px; margin-top: 4px"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>
            <br />
            <div v-for="(doc, category) in docs">
                <div v-if="!sidebarExpandedItems.find((item) => item.id === category)">
                    <a
                        class="sidebar-item"
                        :aria-expanded="true"
                        @click="toggleSidebarItem(category, category + '-btn')"
                        :id="category + '-btn'"
                        ><i class="fa-solid fa-angle-right dropdown-icon"></i>
                        {{ category.charAt(0).toUpperCase() + category.slice(1) }}</a
                    >

                    <div class="dropdown dropdown-active" :id="category">
                        <RouterLink
                            v-for="item in doc"
                            class="dropdown-item sidebar-item"
                            @click="loadDoc(item.name, category)"
                            :to="item.to"
                        >
                            {{ item.name }}
                        </RouterLink>
                    </div>
                </div>
                <div v-else>
                    <a
                        class="sidebar-item"
                        :ariaExpanded="
                            String(
                                sidebarExpandedItems.find((item) => item.id === category)?.expanded
                            )
                        "
                        @click="toggleSidebarItem(category, category + '-btn')"
                        :id="category + '-btn'"
                    >
                        <i class="fa-solid fa-angle-right dropdown-icon"></i>
                        {{ category.charAt(0).toUpperCase() + category.slice(1) }}</a
                    >

                    <div
                        class="dropdown dropdown-active"
                        aria-expanded="true"
                        :id="category"
                        v-if="sidebarExpandedItems.find((item) => item.id === category)?.expanded"
                    >
                        <RouterLink
                            v-for="item in doc"
                            class="dropdown-item sidebar-item"
                            @click="loadDoc(item.name, category)"
                            :to="item.to"
                        >
                            {{ item.name }}
                        </RouterLink>
                    </div>
                    <div class="dropdown" :id="category" aria-expanded="false" v-else>
                        <RouterLink
                            v-for="item in doc"
                            class="dropdown-item sidebar-item"
                            @click="loadDoc(item.name, category)"
                            :to="item.to"
                        >
                            {{ item.name }}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="loader-content">
        <span class="loader-spinner" />
    </div>

    <div class="container content">
        <div class="sidebar-main">
            <ErrorDoc v-if="invalidPage" />

            <div v-else>
                <h1 style="font-size: 2.5rem">{{ docComponent.name }}</h1>
                <component :is="docComponent"></component>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router';
import $ from 'jquery';
import { shallowRef } from 'vue';

import ErrorDoc from '@/pages/docs/Error.vue';

import DocComponents from '@/pages/docs/components.js';
import docs from '@/docs.json';

const router = useRouter();
const route = useRoute();

let category = route.params.category as string;
let page = route.params.page as string;
let docComponent: any = null;
let invalidPage: boolean = false;

const loadDoc = (p: string, c: string) => {
    category = c;
    page = p;
    router.push(`/documentation/${c}/${p}`);
    invalidPage = !(docs as any)[c] || !(docs as any)[c].find((doc: any) => doc.name === p);
    if (!invalidPage && (DocComponents as any)[p])
        docComponent = shallowRef((DocComponents as any)[p]);
    else invalidPage = true;
};

invalidPage =
    !(docs as any)[category] || !(docs as any)[category].find((doc: any) => doc.name === page);
if (!invalidPage && (DocComponents as any)[page])
    docComponent = shallowRef((DocComponents as any)[page]);
else invalidPage = true;

if (!route.params.category || !route.params.page) {
    loadDoc('Welcome', 'general');
}

let sidebarExpandedItems: Array<{ id: string; expanded: boolean }> = JSON.parse(
    localStorage.getItem('sidebar-expands') || '[]'
);

if (!Array.isArray(sidebarExpandedItems)) sidebarExpandedItems = [];

const toggleSidebar = () => {
    const el = $('.sidebar-items')[0];

    el.classList.remove('animate__animated');
    el.classList.remove('animate__fadeInRight');
    el.classList.remove('animate__fadeOutLeft');

    if (el.ariaExpanded === 'true') {
        el.classList.add('animate__animated');
        el.classList.add('animate__fadeOutLeft');
        el.ariaExpanded = 'false';
    } else {
        el.style.display = 'block';
        el.classList.add('animate__animated');
        el.classList.add('animate__fadeInLeft');
        el.ariaExpanded = 'true';
    }
};

const toggleSidebarItem = (id: string, btnId: string) => {
    const el = $(`#${id}`)[0];
    const btnEl = $(`#${btnId}`)[0];

    el.classList.remove('animate__animated');
    el.classList.remove('animate__slideInDown');
    el.classList.remove('animate__slideOutUp');

    if (btnEl.ariaExpanded === 'true') {
        $(el).slideUp();
        btnEl.ariaExpanded = 'false';
    } else {
        $(el).slideDown();
        btnEl.ariaExpanded = 'true';
    }

    const index = sidebarExpandedItems.findIndex((item) => item.id === id);

    if (index > -1) {
        sidebarExpandedItems[index].expanded = !sidebarExpandedItems[index].expanded;
    } else {
        sidebarExpandedItems.push({ id, expanded: Boolean(btnEl.ariaExpanded) });
    }

    localStorage.setItem('sidebar-expands', JSON.stringify(sidebarExpandedItems));
};
</script>

<script lang="ts">
export default {
    mounted() {
        if ($('.loader-content')[0].style.display === 'none')
            $('.loader-content')[0].style.display = 'flex';

        setTimeout(() => {
            $('.content').fadeIn(1000);
            $('.loader-content').fadeOut(500);
        }, 500);
    }
};
</script>
