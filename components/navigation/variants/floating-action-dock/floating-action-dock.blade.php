{{-- Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor — Laravel Blade (components/navigation/variants/floating-action-dock/floating-action-dock.blade.php) --}}
@props(['title' => 'Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor'])
<div {{ $attributes->merge(['class' => 'cxd-navigation-floating-action-dock']) }}>
    <h3>{{ $title }}</h3>
    <p>Barra de iconos de acceso rápido con insignias de estado e indicador de aplicación activa.</p>
    {{ $slot }}
</div>
