{{--
  ============================================================================
  COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (LARAVEL BLADE)
  Archivo: components/docker/variants/fullstack-postgres-redis/fullstack-postgres-redis.blade.php
  Uso: <x-cxd.docker.fullstack-postgres-redis title="04. Fullstack Compose (App + Postgres 17 + Redis 7.4)" />
  ============================================================================
--}}
@props([
    'title' => '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)',
    'badge' => 'DOCKER COMPOSE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-docker-fullstack-postgres-redis']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-docker-fullstack-postgres-redis__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-docker-fullstack-postgres-redis__body">
        <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
        {{ $slot }}
    </div>
</section>
