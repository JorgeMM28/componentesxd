{{-- Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — Laravel Blade (components/buttons/variants/styleless-text-links/styleless-text-links.blade.php) --}}
@props(['title' => 'Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-styleless-text-links']) }}>
    <h3>{{ $title }}</h3>
    <p>Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.</p>
    {{ $slot }}
</div>
