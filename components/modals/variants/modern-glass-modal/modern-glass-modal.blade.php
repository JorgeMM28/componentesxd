{{-- Variante 01 — Modal Moderno con Bordes Redondeados y Blur — Laravel Blade (components/modals/variants/modern-glass-modal/modern-glass-modal.blade.php) --}}
@props(['title' => 'Variante 01 — Modal Moderno con Bordes Redondeados y Blur'])
<div {{ $attributes->merge(['class' => 'cxd-modals-modern-glass-modal']) }}>
    <h3>{{ $title }}</h3>
    <p>Ventana de diálogo con cabecera limpia, cuerpo estructurado y botones que abren/cierran la vista.</p>
    {{ $slot }}
</div>
