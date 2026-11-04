{{-- Variante 08 — Botón Mecánico 3D de Presión Física — Laravel Blade (components/buttons/variants/brutalist-3d-push/brutalist-3d-push.blade.php) --}}
@props(['title' => 'Variante 08 — Botón Mecánico 3D de Presión Física'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-brutalist-3d-push']) }}>
    <h3>{{ $title }}</h3>
    <p>Borde grueso y sombra sólida inferior que se hunde físicamente cada vez que lo presionas.</p>
    {{ $slot }}
</div>
