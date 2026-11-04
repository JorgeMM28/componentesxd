{{-- Variante 04 — Tarjeta Interactiva con Pestañas Internas — Laravel Blade (components/cards/variants/interactive-tabbed-card/interactive-tabbed-card.blade.php) --}}
@props(['title' => 'Variante 04 — Tarjeta Interactiva con Pestañas Internas'])
<div {{ $attributes->merge(['class' => 'cxd-cards-interactive-tabbed-card']) }}>
    <h3>{{ $title }}</h3>
    <p>Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.</p>
    {{ $slot }}
</div>
