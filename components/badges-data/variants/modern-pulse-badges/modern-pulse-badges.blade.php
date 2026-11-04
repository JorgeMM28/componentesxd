{{-- Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante — Laravel Blade (components/badges-data/variants/modern-pulse-badges/modern-pulse-badges.blade.php) --}}
@props(['title' => 'Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante'])
<div {{ $attributes->merge(['class' => 'cxd-badges-data-modern-pulse-badges']) }}>
    <h3>{{ $title }}</h3>
    <p>Insignias redondeadas, cuadradas, sin bordes y con botón de cierre eliminable en vivo.</p>
    {{ $slot }}
</div>
