{{-- Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador) — Laravel Blade (components/forms/variants/filter-search-facet/filter-search-facet.blade.php) --}}
@props(['title' => 'Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador)'])
<div {{ $attributes->merge(['class' => 'cxd-forms-filter-search-facet']) }}>
    <h3>{{ $title }}</h3>
    <p>Selecciona etiquetas múltiples y desliza el rango de precio para ver el resumen de filtros activos.</p>
    {{ $slot }}
</div>
