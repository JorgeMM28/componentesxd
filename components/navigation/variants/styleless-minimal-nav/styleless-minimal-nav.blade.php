{{-- Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante — Laravel Blade (components/navigation/variants/styleless-minimal-nav/styleless-minimal-nav.blade.php) --}}
@props(['title' => 'Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante'])
<div {{ $attributes->merge(['class' => 'cxd-navigation-styleless-minimal-nav']) }}>
    <h3>{{ $title }}</h3>
    <p>Pestañas limpias sin bordes laterales donde la línea activa viaja suavemente al elemento clicado.</p>
    {{ $slot }}
</div>
