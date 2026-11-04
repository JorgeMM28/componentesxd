{{-- Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos — Laravel Blade (components/special-hybrids/variants/cyber-radar-threat-sonar/cyber-radar-threat-sonar.blade.php) --}}
@props(['title' => 'Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-cyber-radar-threat-sonar']) }}>
    <h3>{{ $title }}</h3>
    <p>Barrido rotatorio continuo con coordenadas polares, detección de objetivos y lanzamiento de vectores de intercepción.</p>
    {{ $slot }}
</div>
