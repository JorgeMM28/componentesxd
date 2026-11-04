{{-- Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas — Laravel Blade (components/special-hybrids/variants/pricing-slider-odometer/pricing-slider-odometer.blade.php) --}}
@props(['title' => 'Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-pricing-slider-odometer']) }}>
    <h3>{{ $title }}</h3>
    <p>Ajusta el volumen de tráfico para animar simultáneamente las barras de los 3 planes y el costo estimado.</p>
    {{ $slot }}
</div>
