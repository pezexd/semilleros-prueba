<script setup lang="ts">
import Crud from '@/components/Crud.vue'
import { Header, Item } from 'vue3-easy-data-table';

const headers: Header[] = [
    { text: 'Nombre', value: 'name' },
    { text: 'Apellido', value: 'last_name' }
]
const items: Item[] = [
    { name: 'Peter', last_name: 'Parker' },
    { name: 'Peter', last_name: 'Parker' },
    { name: 'Peter', last_name: 'Parker' },
    { name: 'Peter', last_name: 'Parker' },
    { name: 'Peter', last_name: 'Parker' },
    { name: 'Peter', last_name: 'Parker' },
]
</script>

<template>
    <div class="flex items-center mt-8 intro-y">
        <h2 class="mr-auto text-lg font-medium">Listado Ejemplo</h2>
    </div>
    <!-- BEGIN: Page Layout -->
    <div class="p-5 mt-5 intro-y box">
        <Crud :headers="headers" :items="items" />
    </div>
    <!-- END: Page Layout -->
</template>
