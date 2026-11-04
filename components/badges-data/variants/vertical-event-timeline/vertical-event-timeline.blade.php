{{-- Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos — Laravel Blade (components/badges-data/variants/vertical-event-timeline/vertical-event-timeline.blade.php) --}}
@props(['title' => 'Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos'])
<div {{ $attributes->merge(['class' => 'cxd-badges-data-vertical-event-timeline']) }}>
    <h3>{{ $title }}</h3>
    <p>Cronología vertical con nodos conectados, estados de despliegue y botón para agregar nuevo evento.</p>
    {{ $slot }}
</div>
