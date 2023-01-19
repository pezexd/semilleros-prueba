<script setup lang="ts">
import VueMultiSelect from 'vue-multiselect'
import { Validation } from '@vuelidate/core'

import { ChevronDown as ChevronDownIcon } from 'lucide-vue-next';

export interface selectOption {
    [key: string]: any
    label: string | number
    value: string | number | boolean
}

// [TypeScript] => Defining Props
interface Props {
    modelValue?: string
    label?: string
    placeholder?: string
    multiple?: boolean
    disabled?: boolean
    allowEmpty?: boolean
    tooltip?: string
    onRemove?: Function
    onSelect?: Function
    name: string
    options: selectOption[] | null
    validator: Validation,
}

const props = withDefaults(defineProps<Props>(), {
    multiple: false,
    allowEmpty: true,
})

// const attrs = useAttrs();

// const computedClass = computed(() =>
//     twMerge([
//         "disabled:bg-slate-100 disabled:cursor-not-allowed",
//         "[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed",
//         "transition duration-200 ease-in-out w-full text-sm border border-slate-200 shadow-sm rounded-md py-0 px-3 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40",
//         typeof attrs.class === "string" && attrs.class,
//     ])
// );

const noOpt = ['Sin Opción']

const options_handle = computed(() => {
    if (props.options != null) {

        const mapped = props.options.sort((a, b) => {
            if (typeof (a.value) == 'number' && typeof (b.value) == 'number') {
                return a.value - b.value
            }
            else {
                return a.label.toString().localeCompare(b.label.toString())
            }
        }).map(item => item.value)
        return mapped
    }
    else {
        return noOpt
    }
})

const label_handle = (opt: string) => {
    if (props.options != null) {
        return props.options.find(x => x.value == opt).label
    }
    else {
        return 'Sin opción'
    }
}


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

<template>
    <div class="input-form">
        <template v-if="label">
            <FormLabel :for="name" class="flex flex-col w-full sm:flex-row">
                {{ label }}
                <template v-if="tooltip">
                    <span class="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                        {{ tooltip }}
                    </span>
                </template>
            </FormLabel>
        </template>

        <VueMultiSelect v-model="value" placeholder="Selecciona" class="box-border border border-slate-200 shadow-sm rounded-md"
            :options="options_handle" :class="[{ 'border-danger': validator[name].$error }]" :close-on-select="true"
            :clear-on-select="false" :custom-label="(opt: string) => label_handle(opt)" :allowEmpty="allowEmpty"
            :disabled="disabled" :hideSelected="true" :multiple="multiple" openDirection="bottom"
            selectedLabel="" deselectLabel="" selectLabel="" @select="onSelect" @remove="onRemove">
            <template #noResult>
                No se encontraron elementos.
            </template>
            <template #noOptions>
                La lista esta vacia.
            </template>
            <!-- <template #caret="{ toggle }">
                <button type="button" class="absolute top-2.5 right-2 text-sm" tabindex="-1" @click="toggle()">
                    <ChevronDownIcon />
                </button>
            </template> -->
        </VueMultiSelect>

        <template v-if="validator[name].$error">
            <div v-for="(error, index) in validator[name].$errors" :key="index" class="mt-2 text-danger">
                {{ error.$message }}
            </div>
        </template>
    </div>
</template>

<!-- <script lang="ts" setup>
import VueMultiSelect from 'vue-multiselect'

export interface option {
    label: string | number
    value: string | number | boolean
}
// [TypeScript] => Defining Props
interface Props {
    modelValue?: string | number | object | boolean
    label?: string
    placeholder?: string
    multiple?: boolean
    disabled?: boolean
    hideSelected?: boolean
    allowEmpty?: boolean
    tooltip?: string
    onRemove?: Function
    onSelect?: Function
    name: string
    options: Array<option> | null
    validator: Object,
    dynamic?: {
        type: boolean,
        default: false
    }
}

const props = withDefaults(defineProps<Props>(), {
    multiple: false,
    allowEmpty: true,
})

// [TypeScript] => Defining Emits
interface Emits {
    (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()

const checkInputValidity = computed<string | boolean>(() => {
    if (props.dynamic) {
        return props.validator[props.name].length ? 'border-danger' : false
    } else {
        return props.validator[props.name].$errors.length ? 'border-danger' : false
    }
})

const noOpt = ['Sin Opción']

const options_handle = computed(() => {
    if (props.options != null) {
        
        const mapped = props.options.sort((a, b) => {
            if (typeof(a.value) == 'number' && typeof(b.value) == 'number'){
                return a.value - b.value
            }
            else {
                return a.label.toString().localeCompare(b.label.toString())
            }
        }).map(item => item.value)
        return mapped
    }
    else {
        return noOpt
    }
})

const label_handle = (opt) => {
    if (props.options != null){
        return props.options.find(x => x.value == opt).label
    }
    else {
        return 'Sin opción'
    }
    // (props.options !== null) ? opt => options.find(x => x.value == opt).label : () => 'Sin Opción'
}

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value as string)
    }
})

</script> -->