{{-- Variante 01 — Botones Modernos Redondeados (Píldora & Glow) — Laravel Blade (components/buttons/variants/modern-rounded-pills/modern-rounded-pills.blade.php) --}}
@props(['title' => 'Variante 01 — Botones Modernos Redondeados (Píldora & Glow)'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-modern-rounded-pills']) }}>
    <h3>{{ $title }}</h3>
    <p>Bordes completamente redondeados (999px), degradado sutil, sombra difusa y micro-escala al hacer clic.</p>
    {{ $slot }}
</div>
