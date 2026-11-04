<!--
  ============================================================================
  COMPONENTESXD — 05. Architectural Pricing & Quota Tier Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/pricing-architecture-tier/PricingArchitectureTier.vue
  ============================================================================
-->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';

withDefaults(
  defineProps<{
    title?: string;
    badge?: string;
    interfaceTheme?: string;
  }>(),
  {
    title: '05. Architectural Pricing & Quota Tier Card',
    badge: 'BILLING TIER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'pricing-architecture-tier', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-pricing-architecture-tier" :data-theme="interfaceTheme">
    <header class="cxd-cards-pricing-architecture-tier__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-pricing-architecture-tier__body">
      <p>Desglose técnico de plan con medidor de cuota consumida, lista verificada con SVGs y CTA integrado.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
