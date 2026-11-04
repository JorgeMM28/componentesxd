{{-- Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek) — Laravel Blade (components/special-hybrids/variants/carousel-timeline-scrubber/carousel-timeline-scrubber.blade.php) --}}
@props(['title' => 'Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-carousel-timeline-scrubber']) }}>
    <h3>{{ $title }}</h3>
    <p>Arrastra la barra de tiempo para controlar manualmente la posición, rotación y escala de todo el carrusel.</p>
    {{ $slot }}
</div>
