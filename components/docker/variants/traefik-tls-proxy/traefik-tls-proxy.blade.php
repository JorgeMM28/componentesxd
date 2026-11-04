{{-- Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — Laravel Blade (components/docker/variants/traefik-tls-proxy/traefik-tls-proxy.blade.php) --}}
@props(['title' => 'Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático'])
<div {{ $attributes->merge(['class' => 'cxd-docker-traefik-tls-proxy']) }}>
    <h3>{{ $title }}</h3>
    <p>Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.</p>
    {{ $slot }}
</div>
