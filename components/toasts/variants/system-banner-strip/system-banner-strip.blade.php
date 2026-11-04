{{--
  ============================================================================
  COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (LARAVEL BLADE)
  Archivo: components/toasts/variants/system-banner-strip/system-banner-strip.blade.php
  Uso: <x-cxd.toasts.system-banner-strip title="05. Full-Width Incident & Maintenance Strip" />
  ============================================================================
--}}
@props([
    'title' => '05. Full-Width Incident & Maintenance Strip',
    'badge' => 'STATUS BAR',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-system-banner-strip']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-system-banner-strip__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-system-banner-strip__body">
        <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
        {{ $slot }}
    </div>
</section>
