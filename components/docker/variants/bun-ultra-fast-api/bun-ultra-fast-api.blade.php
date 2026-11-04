{{--
  ============================================================================
  COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (LARAVEL BLADE)
  Archivo: components/docker/variants/bun-ultra-fast-api/bun-ultra-fast-api.blade.php
  Uso: <x-cxd.docker.bun-ultra-fast-api title="05. Bun Distroless High-Performance Runtime" />
  ============================================================================
--}}
@props([
    'title' => '05. Bun Distroless High-Performance Runtime',
    'badge' => 'BUN RUNTIME',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-docker-bun-ultra-fast-api']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-docker-bun-ultra-fast-api__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-docker-bun-ultra-fast-api__body">
        <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
        {{ $slot }}
    </div>
</section>
