{{-- Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — Laravel Blade (components/docker/variants/astro-node-ssr/astro-node-ssr.blade.php) --}}
@props(['title' => 'Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR'])
<div {{ $attributes->merge(['class' => 'cxd-docker-astro-node-ssr']) }}>
    <h3>{{ $title }}</h3>
    <p>Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.</p>
    {{ $slot }}
</div>
