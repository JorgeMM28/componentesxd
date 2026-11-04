{{-- Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4) — Laravel Blade (components/special-hybrids/variants/anime-hero-clockwork/anime-hero-clockwork.blade.php) --}}
@props(['title' => 'Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-anime-hero-clockwork']) }}>
    <h3>{{ $title }}</h3>
    <p>36 vectores radiales concéntricos, anillos orbitales y matriz sincronizada que ejecutan coreografías de relojería, explosión solar, vórtice espiral y pulso cuántico.</p>
    {{ $slot }}
</div>
