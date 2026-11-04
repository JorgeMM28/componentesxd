{{--
  ============================================================================
  COMPONENTESXD — DATA TABLE PRO (LARAVEL BLADE COMPONENT)
  Archivo: components/tables/blade/data-table.blade.php
  Uso: <x-cxd.data-table :rows="$nodes" theme="obsidian" />
  ============================================================================
--}}
@props([
    'rows' => [],
    'theme' => 'obsidian',
])

<div class="cxd-table-shell" data-theme="{{ $theme }}">
    <div class="cxd-table-toolbar">
        <div class="cxd-table-search">
            <input type="search" data-table-search placeholder="Filtrar registros..." />
        </div>
        <div class="cxd-table-filter-group">
            <button type="button" class="cxd-table-filter-btn is-active" data-table-filter="all">Todos</button>
            <button type="button" class="cxd-table-filter-btn" data-table-filter="active">Active</button>
            <button type="button" class="cxd-table-filter-btn" data-table-filter="pending">Pending</button>
            <button type="button" class="cxd-table-filter-btn" data-table-filter="failed">Failed</button>
        </div>
    </div>

    <div class="cxd-table-scroll">
        <table class="cxd-table">
            <thead>
                <tr>
                    <th class="is-sortable" data-sort-key="name">Nodo / Servicio</th>
                    <th>Rol</th>
                    <th class="is-sortable" data-sort-key="status">Estado</th>
                    <th class="is-sortable" data-sort-key="load">Carga</th>
                    <th>Latencia</th>
                </tr>
            </thead>
            <tbody>
                @forelse($rows as $row)
                    <tr data-row-id="{{ $row['id'] }}" data-name="{{ $row['name'] }}" data-status="{{ $row['status'] }}" data-load="{{ $row['load'] }}">
                        <td>
                            <div class="cxd-entity-cell">
                                <div class="cxd-entity-avatar">{{ strtoupper(substr($row['name'], 0, 2)) }}</div>
                                <div class="cxd-entity-meta">
                                    <span class="cxd-entity-name">{{ $row['name'] }}</span>
                                    <span class="cxd-entity-sub">{{ $row['code'] }}</span>
                                </div>
                            </div>
                        </td>
                        <td>{{ $row['role'] }}</td>
                        <td>
                            <span class="cxd-badge cxd-badge--{{ $row['status'] }}">
                                <span class="cxd-badge-dot"></span>
                                {{ $row['status'] }}
                            </span>
                        </td>
                        <td>
                            <div class="cxd-telemetry-cell">
                                <div class="cxd-telemetry-bar">
                                    <div class="cxd-telemetry-fill" style="width: {{ (int) $row['load'] }}%"></div>
                                </div>
                                <span class="cxd-telemetry-val">{{ $row['load'] }}%</span>
                            </div>
                        </td>
                        <td>{{ $row['latency'] }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" style="text-align: center; padding: 2rem;">Sin registros disponibles</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>

