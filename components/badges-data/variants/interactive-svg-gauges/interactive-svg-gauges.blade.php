{{-- Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo — Laravel Blade (components/badges-data/variants/interactive-svg-gauges/interactive-svg-gauges.blade.php) --}}
@props(['title' => 'Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo'])
<div {{ $attributes->merge(['class' => 'cxd-badges-data-interactive-svg-gauges']) }}>
    <h3>{{ $title }}</h3>
    <p>Mueve el control deslizante para actualizar en tiempo real el porcentaje y los anillos SVG.</p>
    {{ $slot }}
</div>
