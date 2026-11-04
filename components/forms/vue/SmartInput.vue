<!--
  ============================================================================
  COMPONENTESXD — SMART FLOATING INPUT & OTP (VUE 3)
  Archivo: components/forms/vue/SmartInput.vue
  ============================================================================
-->
<script setup lang="ts">
import '../css-scss/forms.css';

defineProps<{
  modelValue: string;
  label: string;
  type?: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="cxd-field">
    <div class="cxd-floating-wrap">
      <input
        :type="type || 'text'"
        :value="modelValue"
        placeholder=" "
        class="cxd-floating-input"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <label class="cxd-floating-label">{{ label }}</label>
    </div>
  </div>
</template>

