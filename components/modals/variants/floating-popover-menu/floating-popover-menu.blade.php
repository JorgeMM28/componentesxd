{{-- Variante 03 — Menú Popover Flotante Content-Fit con Acciones — Laravel Blade (components/modals/variants/floating-popover-menu/floating-popover-menu.blade.php) --}}
@props(['title' => 'Variante 03 — Menú Popover Flotante Content-Fit con Acciones'])
<div {{ $attributes->merge(['class' => 'cxd-modals-floating-popover-menu']) }}>
    <h3>{{ $title }}</h3>
    <p>Menú contextual compacto con opciones rápidas, atajos de teclado e interruptor integrado.</p>
    {{ $slot }}
</div>
