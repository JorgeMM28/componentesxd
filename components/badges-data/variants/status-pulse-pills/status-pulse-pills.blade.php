{{--
  ============================================================================
  COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (LARAVEL BLADE)
  Archivo: components/badges-data/variants/status-pulse-pills/status-pulse-pills.blade.php
  Uso: <x-cxd.badges-data.status-pulse-pills title="01. Semantic Status Badges & Live Pulse Dots" />
  ============================================================================
--}}
@props([
    'title' => '01. Semantic Status Badges & Live Pulse Dots',
    'badge' => 'STATUS BADGES',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-status-pulse-pills']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-status-pulse-pills__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-status-pulse-pills__body">
        <p>Colección de insignias semánticas (Operational, Degraded, Outage, Maintenance) con indicador luminoso.</p>
        {{ $slot }}
    </div>
</section>
