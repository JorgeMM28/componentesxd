{{-- Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales — Laravel Blade (components/special-hybrids/variants/card-3d-exploded-inspector/card-3d-exploded-inspector.blade.php) --}}
@props(['title' => 'Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-card-3d-exploded-inspector']) }}>
    <h3>{{ $title }}</h3>
    <p>Alterna entre la tarjeta ensamblada funcional y su vista explotada isométrica de 4 capas en vivo.</p>
    {{ $slot }}
</div>
