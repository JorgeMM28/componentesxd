{{-- Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer) — Laravel Blade (components/toasts/variants/action-buttons-toast/action-buttons-toast.blade.php) --}}
@props(['title' => 'Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer)'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-action-buttons-toast']) }}>
    <h3>{{ $title }}</h3>
    <p>Notificación de invitación/despliegue con botones interactivos que confirman o revierten la operación en vivo.</p>
    {{ $slot }}
</div>
