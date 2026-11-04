<!--
  ============================================================================
  COMPONENTESXD — DATA TABLE PRO (SVELTE 5 RUNES)
  Archivo: components/tables/svelte/DataTable.svelte
  ============================================================================
-->
<script lang="ts">
  import '../css-scss/table.css';

  let {
    rows = [],
    theme = 'obsidian'
  }: {
    rows: Array<{
      id: string;
      name: string;
      code: string;
      role: string;
      status: 'active' | 'pending' | 'failed';
      load: number;
      latency: string;
    }>;
    theme?: 'obsidian' | 'brutalist' | 'swiss' | 'cyber';
  } = $props();

  let query = $state('');
  let statusFilter = $state<'all' | 'active' | 'pending' | 'failed'>('all');
  let sortKey = $state<'name' | 'load' | 'status'>('name');
  let sortDir = $state<'asc' | 'desc'>('asc');

  let filteredRows = $derived(
    rows
      .filter((r) => {
        const q = query.toLowerCase();
        const matchQ = !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q);
        const matchS = statusFilter === 'all' || r.status === statusFilter;
        return matchQ && matchS;
      })
      .sort((a, b) => {
        const vA = a[sortKey];
        const vB = b[sortKey];
        const cmp =
          typeof vA === 'number' && typeof vB === 'number'
            ? vA - vB
            : String(vA).localeCompare(String(vB));
        return sortDir === 'asc' ? cmp : -cmp;
      })
  );

  function toggleSort(key: 'name' | 'load' | 'status') {
    if (sortKey === key) {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortDir = 'asc';
    }
  }
</script>

<div class="cxd-table-shell" data-theme={theme}>
  <div class="cxd-table-toolbar">
    <div class="cxd-table-search">
      <input type="search" bind:value={query} placeholder="Buscar nodo o servicio..." />
    </div>
    <div class="cxd-table-filter-group">
      {#each ['all', 'active', 'pending', 'failed'] as st}
        <button
          type="button"
          class="cxd-table-filter-btn {statusFilter === st ? 'is-active' : ''}"
          onclick={() => (statusFilter = st as any)}
        >
          {st === 'all' ? 'Todos' : st.toUpperCase()}
        </button>
      {/each}
    </div>
  </div>

  <div class="cxd-table-scroll">
    <table class="cxd-table">
      <thead>
        <tr>
          <th class="is-sortable" onclick={() => toggleSort('name')}>Servicio</th>
          <th>Rol</th>
          <th class="is-sortable" onclick={() => toggleSort('status')}>Estado</th>
          <th class="is-sortable" onclick={() => toggleSort('load')}>Carga CPU</th>
          <th>Latencia</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredRows as row (row.id)}
          <tr>
            <td>
              <div class="cxd-entity-cell">
                <div class="cxd-entity-avatar">{row.name.slice(0, 2).toUpperCase()}</div>
                <div class="cxd-entity-meta">
                  <span class="cxd-entity-name">{row.name}</span>
                  <span class="cxd-entity-sub">{row.code}</span>
                </div>
              </div>
            </td>
            <td>{row.role}</td>
            <td>
              <span class="cxd-badge cxd-badge--{row.status}">
                <span class="cxd-badge-dot"></span>
                {row.status}
              </span>
            </td>
            <td>
              <div class="cxd-telemetry-cell">
                <div class="cxd-telemetry-bar">
                  <div class="cxd-telemetry-fill" style="width: {row.load}%"></div>
                </div>
                <span class="cxd-telemetry-val">{row.load}%</span>
              </div>
            </td>
            <td>{row.latency}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

