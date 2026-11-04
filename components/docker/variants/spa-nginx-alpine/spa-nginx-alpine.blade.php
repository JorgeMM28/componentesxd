{{-- Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — Laravel Blade (components/docker/variants/spa-nginx-alpine/spa-nginx-alpine.blade.php) --}}
@props(['title' => 'Variante 03 — React / Vue / Svelte / Angular SPA + Nginx'])
<div {{ $attributes->merge(['class' => 'cxd-docker-spa-nginx-alpine']) }}>
    <h3>{{ $title }}</h3>
    <p>Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.</p>
    {{ $slot }}
</div>
