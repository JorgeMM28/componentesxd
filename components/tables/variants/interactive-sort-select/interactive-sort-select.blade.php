{{-- Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — Laravel Blade (components/tables/variants/interactive-sort-select/interactive-sort-select.blade.php) --}}
@props(['title' => 'Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-interactive-sort-select']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.</p>
    {{ $slot }}
</div>
