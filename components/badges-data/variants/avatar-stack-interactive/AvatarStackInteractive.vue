<!-- Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario — Vue 3 SFC (components/badges-data/variants/avatar-stack-interactive/AvatarStackInteractive.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-badges-data-avatar-stack-interactive" :data-active="active">
    <h3>Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario</h3>
    <p>Haz clic en cualquier miembro del equipo para ver su rol, estado y permisos activos.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
