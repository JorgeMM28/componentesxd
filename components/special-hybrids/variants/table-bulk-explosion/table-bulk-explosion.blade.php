{{-- Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada — Laravel Blade (components/special-hybrids/variants/table-bulk-explosion/table-bulk-explosion.blade.php) --}}
@props(['title' => 'Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-table-bulk-explosion']) }}>
    <h3>{{ $title }}</h3>
    <p>Marca varias filas para desplegar la barra de acción y ejecuta purga en cascada o restauración completa con Anime.js.</p>
    {{ $slot }}
</div>
