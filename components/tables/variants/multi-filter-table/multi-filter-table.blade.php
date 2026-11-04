{{-- Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado) — Laravel Blade (components/tables/variants/multi-filter-table/multi-filter-table.blade.php) --}}
@props(['title' => 'Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-multi-filter-table']) }}>
    <h3>{{ $title }}</h3>
    <p>Barra superior con buscador instantáneo, selector de departamento y botones de estado combinables.</p>
    {{ $slot }}
</div>
