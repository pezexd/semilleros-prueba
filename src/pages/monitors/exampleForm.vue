<script setup lang="ts">
import CommonFile from '@/components/CommonFile.vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const form = reactive({
    name: '',
    persona: '',
    file: '',
})

const form_rules = computed(() => ({
    name: { required },
    persona: { required },
    file: { required },
}))

const v$ = useVuelidate(form_rules, form)

const file_ = ref([])
</script>

<template>
    <div class="flex items-center mt-8 intro-y">
        <h2 class="mr-auto text-lg font-medium">Example Form</h2>
    </div>

    <div class="p-5 mt-5 intro-y box">
        <div class="grid grid-cols-2 gap-6 justify-evenly">
            <CommonInput label="Nombre" name="name" v-model="form.name" :validator="v$" />
            <CommonSelect label="Persona" name="persona" v-model="form.persona" :validator="v$" :options="[ { value: 'dsadsa', label: 'dasdsa'} ]" />
            <CommonFile label="Documento 1" name="file" v-model="form.file" :validator="v$" :files="file_"
            @addfile="(err, val) => form.file = val.file"
            @removefile="() => form.file = null"
            />
        </div>
        <pre>
            {{ form }}
        </pre>
    </div>
</template>