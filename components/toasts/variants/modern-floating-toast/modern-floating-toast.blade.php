{{-- Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — Laravel Blade (components/toasts/variants/modern-floating-toast/modern-floating-toast.blade.php) --}}
@props(['title' => 'Variante 01 — Toaster Moderno Flotante con Barra de Tiempo'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-modern-floating-toast']) }}>
    <h3>{{ $title }}</h3>
    <p>Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.</p>
    {{ $slot }}
</div>
