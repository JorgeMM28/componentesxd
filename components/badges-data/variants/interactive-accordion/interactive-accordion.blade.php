{{-- Variante 02 — Acordeón Interactivo Multi-Sección — Laravel Blade (components/badges-data/variants/interactive-accordion/interactive-accordion.blade.php) --}}
@props(['title' => 'Variante 02 — Acordeón Interactivo Multi-Sección'])
<div {{ $attributes->merge(['class' => 'cxd-badges-data-interactive-accordion']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en cualquier cabecera para expandir o contraer su contenido suavemente.</p>
    {{ $slot }}
</div>
