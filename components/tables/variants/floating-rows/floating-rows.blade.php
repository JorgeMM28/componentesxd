{{-- Variante 04 — Tabla de Filas Flotantes Separadas — Laravel Blade (components/tables/variants/floating-rows/floating-rows.blade.php) --}}
@props(['title' => 'Variante 04 — Tabla de Filas Flotantes Separadas'])
<div {{ $attributes->merge(['class' => 'cxd-tables-floating-rows']) }}>
    <h3>{{ $title }}</h3>
    <p>Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.</p>
    {{ $slot }}
</div>
