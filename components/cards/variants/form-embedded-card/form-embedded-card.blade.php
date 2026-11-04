{{-- Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config — Laravel Blade (components/cards/variants/form-embedded-card/form-embedded-card.blade.php) --}}
@props(['title' => 'Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config'])
<div {{ $attributes->merge(['class' => 'cxd-cards-form-embedded-card']) }}>
    <h3>{{ $title }}</h3>
    <p>Permite ajustar parámetros con inputs y calcular el costo mensual directamente en la tarjeta.</p>
    {{ $slot }}
</div>
