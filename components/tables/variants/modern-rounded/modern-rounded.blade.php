{{-- Variante 01 — Tabla Moderna de Bordes Redondeados — Laravel Blade (components/tables/variants/modern-rounded/modern-rounded.blade.php) --}}
@props(['title' => 'Variante 01 — Tabla Moderna de Bordes Redondeados'])
<div {{ $attributes->merge(['class' => 'cxd-tables-modern-rounded']) }}>
    <h3>{{ $title }}</h3>
    <p>Contenedor con radio amplio de 18px, cabeceras suaves tipo cápsula, avatares circulares y badges pastilla.</p>
    {{ $slot }}
</div>
