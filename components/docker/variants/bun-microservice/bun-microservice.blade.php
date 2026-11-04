{{-- Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — Laravel Blade (components/docker/variants/bun-microservice/bun-microservice.blade.php) --}}
@props(['title' => 'Variante 05 — Microservicio Ultra-Rápido con Bun Alpine'])
<div {{ $attributes->merge(['class' => 'cxd-docker-bun-microservice']) }}>
    <h3>{{ $title }}</h3>
    <p>Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.</p>
    {{ $slot }}
</div>
