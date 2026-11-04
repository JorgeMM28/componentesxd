{{-- Variante 06 — Barra de Paginación Interactiva con Salto de Página — Laravel Blade (components/navigation/variants/interactive-pagination/interactive-pagination.blade.php) --}}
@props(['title' => 'Variante 06 — Barra de Paginación Interactiva con Salto de Página'])
<div {{ $attributes->merge(['class' => 'cxd-navigation-interactive-pagination']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.</p>
    {{ $slot }}
</div>
