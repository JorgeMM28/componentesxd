{{-- Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — Laravel Blade (components/tables/variants/styleless-minimal/styleless-minimal.blade.php) --}}
@props(['title' => 'Variante 02 — Tabla Styleless (Sin Bordes / Editorial)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-styleless-minimal']) }}>
    <h3>{{ $title }}</h3>
    <p>Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.</p>
    {{ $slot }}
</div>
