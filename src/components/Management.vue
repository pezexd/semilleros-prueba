<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import CommonTextarea from './CommonTextarea.vue';
// import BaseSelect from '@/components/base/Select.vue'

// const { options } = storeToRefs(useSelectStore())
const route = useRoute()

// const statuses = computed(() => {
//     let handle_status = options.value.status
// })

const emit = defineEmits([
    'send'
])

const form = reactive({
    status: '',
    reject_message: '',
    file_1: '',
    file_2: '',
})

const form_rules = computed(() => ({
    status: { required },
    reject_message: (form.status == 'REC') ? { required } : {},
}))

const v$ = useVuelidate(form_rules, form, { $scope: false, $stopPropagation: true })

const on_submit = async () => {
    const valid = await v$.value.$validate()

    if (valid) {
        emit('send', { management: { ...form } })
    }
    else {
        alerts.validation()
    }
}
</script>

<template>
    <div class="box p-5">
        <form @submit.prevent="on_submit" id="gestor_message" class="flex flex-col items-center gap-6 justify-evenly">
            <div :class="form.status === 'REC' ? 'grid-cols-1 lg:grid-cols-[25%_1fr]' : 'grid-cols-1'"
                class="grid gap-6 justify-evenly w-full">
                <div class="w-full">
                    <BaseSelect label="ESTADO *" tooltip="Selecciona un Estado" placeholder="Seleccione" name="status"
                        v-model="form.status" :options="statuses || null" :validator="v$" />
                </div>
                <div class="w-full intro-x" v-if="form.status === 'REC'">
                    <CommonTextarea rows="3" label="MENSAJE DE RECHAZO " placeholder="Porque..." name="reject_message"
                        v-model="form.reject_message" :validator="v$" />
                </div>
            </div>
            <div class="w-full flex justify-end col-span-full">
                <button type="submit" form="gestor_message" class="btn btn-primary w-24 ml-2">
                    Enviar
                </button>
            </div>
        </form>
    </div>
</template>