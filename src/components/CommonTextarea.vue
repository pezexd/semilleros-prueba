<script lang="ts" setup>
import { FormLabel, FormTextarea } from '@/base-components/Form';
import { Validation } from '@vuelidate/core'

// [TypeScript] => Defining Props
interface Props {
    modelValue?: string | number
    label?: string
    placeholder?: string
    disabled?: boolean
    tooltip?: string
    name: string
    rows?: string
    cols?: string
    validator: Validation
}

const props = withDefaults(defineProps<Props>(), {})

// [TypeScript] => Defining Emits
interface Emits {
    (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()

// Detecting v-model changes.
const value = computed({
    get() {
        return props.modelValue as string
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<template>
    <div class="input-form">
        <template v-if="label">
            <FormLabel :for="name" class="flex flex-col w-full sm:flex-row">
                {{ label }}
                <span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                    {{ tooltip }}
                </span>
            </FormLabel>
        </template>
        <!-- Component -->
        <FormTextarea :id="name" :rows="rows" :cols="rows" :disabled="disabled" v-model="value" v-bind="props">
        </FormTextarea>
        <!-- Validator -->
        <template v-if="validator[name].$error">
            <div v-for="(error, index) in validator[name].$errors" :key="index" class="mt-2 text-danger">
                {{ error.$message }}
            </div>
        </template>
    </div>
</template>
