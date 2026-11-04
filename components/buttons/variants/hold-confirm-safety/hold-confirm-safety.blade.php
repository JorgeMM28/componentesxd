{{-- Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — Laravel Blade (components/buttons/variants/hold-confirm-safety/hold-confirm-safety.blade.php) --}}
@props(['title' => 'Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-hold-confirm-safety']) }}>
    <h3>{{ $title }}</h3>
    <p>Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.</p>
    {{ $slot }}
</div>
