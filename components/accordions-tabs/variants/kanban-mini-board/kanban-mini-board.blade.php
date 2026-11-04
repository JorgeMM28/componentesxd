{{-- Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo) — Laravel Blade (components/accordions-tabs/variants/kanban-mini-board/kanban-mini-board.blade.php) --}}
@props(['title' => 'Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-kanban-mini-board']) }}>
    <h3>{{ $title }}</h3>
    <p>Tarjetas operativas con botones para promover o regresar tareas entre Backlog, En Progreso y Producción.</p>
    {{ $slot }}
</div>
