{{-- Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid) — Laravel Blade (components/special-hybrids/variants/search-grid-2d-ripple/search-grid-2d-ripple.blade.php) --}}
@props(['title' => 'Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-search-grid-2d-ripple']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en cualquier nodo del cluster o filtra por estado para expandir una onda 2D desde ese punto exacto.</p>
    {{ $slot }}
</div>
