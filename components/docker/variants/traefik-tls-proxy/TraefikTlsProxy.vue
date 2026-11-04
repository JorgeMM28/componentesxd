<!-- Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — Vue 3 SFC (components/docker/variants/traefik-tls-proxy/TraefikTlsProxy.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-docker-traefik-tls-proxy" :data-active="active">
    <h3>Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático</h3>
    <p>Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
