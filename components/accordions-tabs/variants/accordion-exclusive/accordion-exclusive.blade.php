{{-- Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — Laravel Blade (components/accordions-tabs/variants/accordion-exclusive/accordion-exclusive.blade.php) --}}
@props(['title' => 'Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-accordion-exclusive']) }}>
    <h3>{{ $title }}</h3>
    <p>Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.</p>
    {{ $slot }}
</div>
