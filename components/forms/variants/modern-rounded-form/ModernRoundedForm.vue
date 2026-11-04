<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountModernRoundedForm } from './modern-rounded-form.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountModernRoundedForm(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form" data-cxd-control="modern-rounded-form" ref="root"><form data-form><label>Correo electrónico <input type="email" data-email required value="arquitectura@componentesxd.dev" /></label><button type="submit">Guardar</button></form><span role="status">Listo para guardar</span></div></template>
