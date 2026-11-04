{{-- Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno) — Laravel Blade (components/special-hybrids/variants/orbital-solar-gravity-sim/orbital-solar-gravity-sim.blade.php) --}}
@props(['title' => 'Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-orbital-solar-gravity-sim']) }}>
    <h3>{{ $title }}</h3>
    <p>Simulación heliocéntrica continua con Mercurio, Venus, Tierra + Luna, Marte, Cinturón de Asteroides, Júpiter, Saturno con anillos, Urano y Neptuno, selector de telemetría planetaria y escala de tiempo Warp.</p>
    {{ $slot }}
</div>
