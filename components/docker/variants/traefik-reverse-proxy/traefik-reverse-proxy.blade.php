{{--
  ============================================================================
  COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (LARAVEL BLADE)
  Archivo: components/docker/variants/traefik-reverse-proxy/traefik-reverse-proxy.blade.php
  Uso: <x-cxd.docker.traefik-reverse-proxy title="06. Traefik v3 Automatic TLS + Reverse Proxy" />
  ============================================================================
--}}
@props([
    'title' => '06. Traefik v3 Automatic TLS + Reverse Proxy',
    'badge' => 'REVERSE PROXY',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-docker-traefik-reverse-proxy']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-docker-traefik-reverse-proxy__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-docker-traefik-reverse-proxy__body">
        <p>Configuración lista para enrutar múltiples contenedores locales con certificados y balanceo automático.</p>
        {{ $slot }}
    </div>
</section>
