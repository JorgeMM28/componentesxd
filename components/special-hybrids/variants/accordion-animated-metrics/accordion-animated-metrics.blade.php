{{-- Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir — Laravel Blade (components/special-hybrids/variants/accordion-animated-metrics/accordion-animated-metrics.blade.php) --}}
@props(['title' => 'Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-accordion-animated-metrics']) }}>
    <h3>{{ $title }}</h3>
    <p>Cada vez que abres una sección del acordeón, sus barras y métricas internas se animan dinámicamente.</p>
    {{ $slot }}
</div>
