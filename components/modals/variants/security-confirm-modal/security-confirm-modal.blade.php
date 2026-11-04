{{-- Variante 05 — Modal de Confirmación con Validación de Texto — Laravel Blade (components/modals/variants/security-confirm-modal/security-confirm-modal.blade.php) --}}
@props(['title' => 'Variante 05 — Modal de Confirmación con Validación de Texto'])
<div {{ $attributes->merge(['class' => 'cxd-modals-security-confirm-modal']) }}>
    <h3>{{ $title }}</h3>
    <p>Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.</p>
    {{ $slot }}
</div>
