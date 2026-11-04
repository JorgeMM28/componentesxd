{{--
  ============================================================================
  COMPONENTESXD — 02. Vertical Deployment & Event Timeline (LARAVEL BLADE)
  Archivo: components/badges-data/variants/activity-timeline-feed/activity-timeline-feed.blade.php
  Uso: <x-cxd.badges-data.activity-timeline-feed title="02. Vertical Deployment & Event Timeline" />
  ============================================================================
--}}
@props([
    'title' => '02. Vertical Deployment & Event Timeline',
    'badge' => 'TIMELINE FEED',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-activity-timeline-feed']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-activity-timeline-feed__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-activity-timeline-feed__body">
        <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
        {{ $slot }}
    </div>
</section>
