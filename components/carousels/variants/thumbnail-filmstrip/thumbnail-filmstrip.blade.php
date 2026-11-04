{{-- Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip) — Laravel Blade (components/carousels/variants/thumbnail-filmstrip/thumbnail-filmstrip.blade.php) --}}
@props(['title' => 'Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)'])
<div {{ $attributes->merge(['class' => 'cxd-carousels-thumbnail-filmstrip']) }}>
    <h3>{{ $title }}</h3>
    <p>Escenario principal de gran formato conectado a una banda interactiva de miniaturas con enfoque activo.</p>
    {{ $slot }}
</div>
