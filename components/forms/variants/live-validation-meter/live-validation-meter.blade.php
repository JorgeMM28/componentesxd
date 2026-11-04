{{-- Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo — Laravel Blade (components/forms/variants/live-validation-meter/live-validation-meter.blade.php) --}}
@props(['title' => 'Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo'])
<div {{ $attributes->merge(['class' => 'cxd-forms-live-validation-meter']) }}>
    <h3>{{ $title }}</h3>
    <p>Escribe una contraseña para ver cómo se calculan en tiempo real los 4 niveles de fortaleza.</p>
    {{ $slot }}
</div>
