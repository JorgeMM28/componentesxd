{{-- Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas — Laravel Blade (components/special-hybrids/variants/table-stagger-sorter/table-stagger-sorter.blade.php) --}}
@props(['title' => 'Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-table-stagger-sorter']) }}>
    <h3>{{ $title }}</h3>
    <p>Ordena por latencia, carga o nombre y observa cómo todas las filas y sus barras internas se reacomodan con una onda escalonada.</p>
    {{ $slot }}
</div>
