{{-- Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js — Laravel Blade (components/special-hybrids/variants/table-realtime-stream/table-realtime-stream.blade.php) --}}
@props(['title' => 'Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-table-realtime-stream']) }}>
    <h3>{{ $title }}</h3>
    <p>Agrega nuevos registros desde el formulario integrado con animación spring de entrada, recálculo de suma animada y eliminación con colapso suave.</p>
    {{ $slot }}
</div>
