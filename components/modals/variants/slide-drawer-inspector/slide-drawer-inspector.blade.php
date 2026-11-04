{{-- Variante 06 — Panel Inspector Lateral (Drawer de Detalles) — Laravel Blade (components/modals/variants/slide-drawer-inspector/slide-drawer-inspector.blade.php) --}}
@props(['title' => 'Variante 06 — Panel Inspector Lateral (Drawer de Detalles)'])
<div {{ $attributes->merge(['class' => 'cxd-modals-slide-drawer-inspector']) }}>
    <h3>{{ $title }}</h3>
    <p>Estructura de panel lateral con pestañas de propiedades, JSON en vivo y botones de acción.</p>
    {{ $slot }}
</div>
