{{-- Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria — Laravel Blade (components/tables/variants/brutalist-ledger/brutalist-ledger.blade.php) --}}
@props(['title' => 'Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria'])
<div {{ $attributes->merge(['class' => 'cxd-tables-brutalist-ledger']) }}>
    <h3>{{ $title }}</h3>
    <p>Alto contraste con filas alternadas (zebra), bordes marcados de 2px y fila tfoot de balance total.</p>
    {{ $slot }}
</div>
