{{-- Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado — Laravel Blade (components/accordions-tabs/variants/segmented-pricing-toggle/segmented-pricing-toggle.blade.php) --}}
@props(['title' => 'Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-segmented-pricing-toggle']) }}>
    <h3>{{ $title }}</h3>
    <p>Alterna entre facturación mensual y anual aplicando descuento automático e interpolando las tarifas en vivo.</p>
    {{ $slot }}
</div>
