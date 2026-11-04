<!--
  ============================================================================
  COMPONENTESXD — COMMAND PALETTE (VUE 3)
  Archivo: components/modals/vue/CommandPalette.vue
  ============================================================================
-->
<script setup lang="ts">
import { ref, computed } from 'vue';
import '../css-scss/modals.css';

const props = defineProps<{
  items: Array<{ id: string; label: string; shortcut: string }>;
}>();

const query = ref('');
const activeIndex = ref(0);

const filtered = computed(() =>
  props.items.filter((i) => i.label.toLowerCase().includes(query.value.toLowerCase()))
);
</script>

<template>
  <div class="cxd-cmd-palette">
    <div class="cxd-cmd-header">
      <input
        v-model="query"
        class="cxd-cmd-input"
        placeholder="Escribe un comando o busca..."
      />
      <kbd class="cxd-cmd-kbd">ESC</kbd>
    </div>
    <div class="cxd-cmd-list">
      <div
        v-for="(item, idx) in filtered"
        :key="item.id"
        class="cxd-cmd-item"
        :class="{ 'is-active': idx === activeIndex }"
        @mouseenter="activeIndex = idx"
      >
        <span>{{ item.label }}</span>
        <kbd class="cxd-cmd-kbd">{{ item.shortcut }}</kbd>
      </div>
    </div>
  </div>
</template>

