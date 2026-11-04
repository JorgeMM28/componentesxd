<!--
  ============================================================================
  COMPONENTESXD — DATA TABLE PRO (VUE 3 COMPOSITION API)
  Archivo: components/tables/vue/DataTable.vue
  ============================================================================
-->
<script setup lang="ts">
import { ref, computed } from 'vue';
import '../css-scss/table.css';

export interface TableRow {
  id: string;
  name: string;
  code: string;
  role: string;
  status: 'active' | 'pending' | 'failed';
  load: number;
  latency: string;
}

const props = withDefaults(
  defineProps<{
    rows: TableRow[];
    theme?: 'obsidian' | 'brutalist' | 'swiss' | 'cyber';
  }>(),
  {
    theme: 'obsidian'
  }
);

const query = ref('');
const statusFilter = ref<'all' | 'active' | 'pending' | 'failed'>('all');
const sortKey = ref<'name' | 'load' | 'status'>('name');
const sortDir = ref<'asc' | 'desc'>('asc');

const filteredRows = computed(() => {
  return [...props.rows]
    .filter((r) => {
      const q = query.value.toLowerCase();
      const matchQuery =
        !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q);
      const matchStatus = statusFilter.value === 'all' || r.status === statusFilter.value;
      return matchQuery && matchStatus;
    })
    .sort((a, b) => {
      const vA = a[sortKey.value];
      const vB = b[sortKey.value];
      const cmp =
        typeof vA === 'number' && typeof vB === 'number'
          ? vA - vB
          : String(vA).localeCompare(String(vB));
      return sortDir.value === 'asc' ? cmp : -cmp;
    });
});

function toggleSort(key: 'name' | 'load' | 'status') {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortDir.value = 'asc';
  }
}
</script>

<template>
  <div class="cxd-table-shell" :data-theme="theme">
    <div class="cxd-table-toolbar">
      <div class="cxd-table-search">
        <input v-model="query" type="search" placeholder="Filtrar nodos o código..." />
      </div>
      <div class="cxd-table-filter-group">
        <button
          v-for="st in (['all', 'active', 'pending', 'failed'] as const)"
          :key="st"
          type="button"
          class="cxd-table-filter-btn"
          :class="{ 'is-active': statusFilter === st }"
          @click="statusFilter = st"
        >
          {{ st === 'all' ? 'Todos' : st.toUpperCase() }}
        </button>
      </div>
    </div>

    <div class="cxd-table-scroll">
      <table class="cxd-table">
        <thead>
          <tr>
            <th class="is-sortable" @click="toggleSort('name')">Servicio</th>
            <th>Rol</th>
            <th class="is-sortable" @click="toggleSort('status')">Estado</th>
            <th class="is-sortable" @click="toggleSort('load')">Carga</th>
            <th>Latencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredRows" :key="row.id">
            <td>
              <div class="cxd-entity-cell">
                <div class="cxd-entity-avatar">{{ row.name.slice(0, 2).toUpperCase() }}</div>
                <div class="cxd-entity-meta">
                  <span class="cxd-entity-name">{{ row.name }}</span>
                  <span class="cxd-entity-sub">{{ row.code }}</span>
                </div>
              </div>
            </td>
            <td>{{ row.role }}</td>
            <td>
              <span :class="`cxd-badge cxd-badge--${row.status}`">
                <span class="cxd-badge-dot" />
                {{ row.status }}
              </span>
            </td>
            <td>
              <div class="cxd-telemetry-cell">
                <div class="cxd-telemetry-bar">
                  <div class="cxd-telemetry-fill" :style="{ width: `${row.load}%` }" />
                </div>
                <span class="cxd-telemetry-val">{{ row.load }}%</span>
              </div>
            </td>
            <td>{{ row.latency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

