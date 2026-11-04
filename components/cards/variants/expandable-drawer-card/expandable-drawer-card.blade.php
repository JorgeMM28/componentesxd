{{-- Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — Laravel Blade (components/cards/variants/expandable-drawer-card/expandable-drawer-card.blade.php) --}}
@props(['title' => 'Variante 08 — Tarjeta con Despliegue de Detalles Técnicos'])
<div {{ $attributes->merge(['class' => 'cxd-cards-expandable-drawer-card']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.</p>
    {{ $slot }}
</div>
