{{-- Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario — Laravel Blade (components/badges-data/variants/avatar-stack-interactive/avatar-stack-interactive.blade.php) --}}
@props(['title' => 'Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario'])
<div {{ $attributes->merge(['class' => 'cxd-badges-data-avatar-stack-interactive']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en cualquier miembro del equipo para ver su rol, estado y permisos activos.</p>
    {{ $slot }}
</div>
