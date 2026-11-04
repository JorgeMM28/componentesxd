{{-- Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial — Laravel Blade (components/cards/variants/modern-rounded-bento/modern-rounded-bento.blade.php) --}}
@props(['title' => 'Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial'])
<div {{ $attributes->merge(['class' => 'cxd-cards-modern-rounded-bento']) }}>
    <h3>{{ $title }}</h3>
    <p>Radio suave de 20px, iluminación que sigue al cursor, insignia superior y métrica destacada.</p>
    {{ $slot }}
</div>
