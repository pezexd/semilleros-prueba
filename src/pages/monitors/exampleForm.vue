<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const form = reactive({
    name: '',
    persona: ''
})

const form_rules = computed(() => ({
    name: { required },
    persona: { required }
}))

const v$ = useVuelidate(form_rules, form)
</script>

<template>
    <div class="flex items-center mt-8 intro-y">
        <h2 class="mr-auto text-lg font-medium">Example Form</h2>
    </div>

    <div class="p-5 mt-5 intro-y box">
        olaa
        <div class="grid grid-cols-2 gap-6 justify-evenly">
            <CommonInput label="Nombre" name="name" v-model="form.name" :validator="v$" />
            <CommonSelect label="Persona" name="persona" v-model="form.persona" :validator="v$" :options="[ { value: 'dsadsa', label: 'dasdsa'} ]" />
        </div>
    </div>
</template>