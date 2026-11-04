{{-- Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real — Laravel Blade (components/special-hybrids/variants/stepper-checkout-calculator/stepper-checkout-calculator.blade.php) --}}
@props(['title' => 'Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-stepper-checkout-calculator']) }}>
    <h3>{{ $title }}</h3>
    <p>Avanza por las etapas de hardware, red y réplicas recalculando el costo mensual con animación numérica instantánea.</p>
    {{ $slot }}
</div>
