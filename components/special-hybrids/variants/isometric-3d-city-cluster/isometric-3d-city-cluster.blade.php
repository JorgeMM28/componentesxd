{{-- Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4 — Laravel Blade (components/special-hybrids/variants/isometric-3d-city-cluster/isometric-3d-city-cluster.blade.php) --}}
@props(['title' => 'Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-isometric-3d-city-cluster']) }}>
    <h3>{{ $title }}</h3>
    <p>16 torres tridimensionales en perspectiva isométrica real que modulan su elevación Z con stagger 2D radial.</p>
    {{ $slot }}
</div>
