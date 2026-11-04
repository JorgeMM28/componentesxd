{{-- Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada — Laravel Blade (components/special-hybrids/variants/kanban-spring-pipeline/kanban-spring-pipeline.blade.php) --}}
@props(['title' => 'Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-kanban-spring-pipeline']) }}>
    <h3>{{ $title }}</h3>
    <p>Promueve tarjetas entre etapas disparando rebote físico y actualizando el porcentaje global del sprint.</p>
    {{ $slot }}
</div>
