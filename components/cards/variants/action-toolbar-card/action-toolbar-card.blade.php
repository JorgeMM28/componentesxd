{{-- Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — Laravel Blade (components/cards/variants/action-toolbar-card/action-toolbar-card.blade.php) --}}
@props(['title' => 'Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)'])
<div {{ $attributes->merge(['class' => 'cxd-cards-action-toolbar-card']) }}>
    <h3>{{ $title }}</h3>
    <p>Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.</p>
    {{ $slot }}
</div>
