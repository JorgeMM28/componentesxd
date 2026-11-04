{{--
  ============================================================================
  COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (LARAVEL BLADE)
  Archivo: components/docker/variants/spa-nginx-brotli/spa-nginx-brotli.blade.php
  Uso: <x-cxd.docker.spa-nginx-brotli title="03. React / Vue / Svelte / Angular SPA + Nginx" />
  ============================================================================
--}}
@props([
    'title' => '03. React / Vue / Svelte / Angular SPA + Nginx',
    'badge' => 'NGINX ALPINE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-docker-spa-nginx-brotli']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-docker-spa-nginx-brotli__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-docker-spa-nginx-brotli__body">
        <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
        {{ $slot }}
    </div>
</section>
