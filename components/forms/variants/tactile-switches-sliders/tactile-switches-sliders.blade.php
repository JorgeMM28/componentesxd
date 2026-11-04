{{-- Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios) — Laravel Blade (components/forms/variants/tactile-switches-sliders/tactile-switches-sliders.blade.php) --}}
@props(['title' => 'Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios)'])
<div {{ $attributes->merge(['class' => 'cxd-forms-tactile-switches-sliders']) }}>
    <h3>{{ $title }}</h3>
    <p>Interruptores animados, contador con botones +/- y selector de tarjetas de opción.</p>
    {{ $slot }}
</div>
