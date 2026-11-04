{{-- Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — Laravel Blade (components/docker/variants/fullstack-compose-stack/fullstack-compose-stack.blade.php) --}}
@props(['title' => 'Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)'])
<div {{ $attributes->merge(['class' => 'cxd-docker-fullstack-compose-stack']) }}>
    <h3>{{ $title }}</h3>
    <p>Orquestación completa con volúmenes persistentes y healthchecks automáticos.</p>
    {{ $slot }}
</div>
