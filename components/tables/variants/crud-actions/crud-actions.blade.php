{{-- Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — Laravel Blade (components/tables/variants/crud-actions/crud-actions.blade.php) --}}
@props(['title' => 'Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-crud-actions']) }}>
    <h3>{{ $title }}</h3>
    <p>Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.</p>
    {{ $slot }}
</div>
