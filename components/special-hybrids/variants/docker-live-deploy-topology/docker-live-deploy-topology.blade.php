{{-- Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js — Laravel Blade (components/special-hybrids/variants/docker-live-deploy-topology/docker-live-deploy-topology.blade.php) --}}
@props(['title' => 'Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-docker-live-deploy-topology']) }}>
    <h3>{{ $title }}</h3>
    <p>Envía paquetes de prueba a través del proxy, aplicación y base de datos animando cada salto y latencia.</p>
    {{ $slot }}
</div>
