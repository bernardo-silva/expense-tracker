<script setup lang="ts">
const props = defineProps<{
  label: string;
  placeholder?: string;
  type: "number" | "text" | "password" | "email";
  required?: boolean;
  error?: string;
}>();

const modelValue = defineModel({ type: String });

const emit = defineEmits<{
  change: [];
}>();
</script>
<template>
  <legend v-if="label" class="fieldset-label">{{ label }}</legend>
  <input
v-bind="props" v-model="modelValue" :class="['input', { 'input-error': error }]" :placeholder :required
    @change="emit('change')">
  <div class="text-error min-h-[1.5rem]">{{ error }}</div>
</template>
