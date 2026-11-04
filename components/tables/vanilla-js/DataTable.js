/**
 * ============================================================================
 * COMPONENTESXD — DATA TABLE PRO (VANILLA JS ENGINE)
 * Archivo: components/tables/vanilla-js/DataTable.js
 * ============================================================================
 * Sin dependencias externas. Conecta búsqueda en vivo, filtrado por estado,
 * ordenamiento multicriterio y selección por lotes sobre cualquier `.cxd-table-shell`.
 */

export class CxdDataTable {
  constructor(rootElement, options = {}) {
    this.root = typeof rootElement === 'string'
      ? document.querySelector(rootElement)
      : rootElement;

    if (!this.root) return;

    this.state = {
      query: '',
      statusFilter: 'all',
      sortKey: options.defaultSort || 'name',
      sortDir: 'asc',
      selectedIds: new Set()
    };

    this.searchInput = this.root.querySelector('[data-table-search]');
    this.filterButtons = Array.from(this.root.querySelectorAll('[data-table-filter]'));
    this.sortHeaders = Array.from(this.root.querySelectorAll('[data-sort-key]'));
    this.tbody = this.root.querySelector('tbody');
    this.rows = Array.from(this.tbody?.querySelectorAll('tr[data-row-id]') || []);
    this.counterEl = this.root.querySelector('[data-table-count]');
    this.selectAllCheckbox = this.root.querySelector('[data-select-all]');

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    this.searchInput?.addEventListener('input', (e) => {
      this.state.query = e.target.value.trim().toLowerCase();
      this.render();
    });

    this.filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.state.statusFilter = btn.dataset.tableFilter || 'all';
        this.filterButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
        this.render();
      });
    });

    this.sortHeaders.forEach((th) => {
      th.addEventListener('click', () => {
        const key = th.dataset.sortKey;
        if (this.state.sortKey === key) {
          this.state.sortDir = this.state.sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          this.state.sortKey = key;
          this.state.sortDir = 'asc';
        }
        this.render();
      });
    });

    this.selectAllCheckbox?.addEventListener('change', (e) => {
      const checked = e.target.checked;
      this.rows.forEach((row) => {
        if (row.style.display !== 'none') {
          const id = row.dataset.rowId;
          const cb = row.querySelector('input[type="checkbox"]');
          if (cb) cb.checked = checked;
          row.classList.toggle('is-selected', checked);
          if (checked) this.state.selectedIds.add(id);
          else this.state.selectedIds.delete(id);
        }
      });
    });

    this.rows.forEach((row) => {
      const cb = row.querySelector('input[type="checkbox"]');
      cb?.addEventListener('change', (e) => {
        const checked = e.target.checked;
        const id = row.dataset.rowId;
        row.classList.toggle('is-selected', checked);
        if (checked) this.state.selectedIds.add(id);
        else this.state.selectedIds.delete(id);
      });
    });
  }

  render() {
    const { query, statusFilter, sortKey, sortDir } = this.state;

    const visibleRows = this.rows.filter((row) => {
      const text = (row.textContent || '').toLowerCase();
      const rowStatus = row.dataset.status || '';
      const matchesQuery = !query || text.includes(query);
      const matchesStatus = statusFilter === 'all' || rowStatus === statusFilter;
      const show = matchesQuery && matchesStatus;
      row.style.display = show ? '' : 'none';
      return show;
    });

    visibleRows.sort((a, b) => {
      const valA = a.dataset[sortKey] || '';
      const valB = b.dataset[sortKey] || '';
      const numA = Number(valA);
      const numB = Number(valB);

      const cmp = !Number.isNaN(numA) && !Number.isNaN(numB)
        ? numA - numB
        : valA.localeCompare(valB, undefined, { numeric: true });

      return sortDir === 'asc' ? cmp : -cmp;
    });

    visibleRows.forEach((row) => this.tbody.appendChild(row));

    if (this.counterEl) {
      this.counterEl.textContent = `${visibleRows.length} de ${this.rows.length} registros`;
    }
  }
}

