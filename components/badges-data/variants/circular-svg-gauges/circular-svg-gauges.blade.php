{{--
  ============================================================================
  COMPONENTESXD — 03. Radial SVG Telemetry Gauges (LARAVEL BLADE)
  Archivo: components/badges-data/variants/circular-svg-gauges/circular-svg-gauges.blade.php
  Uso: <x-cxd.badges-data.circular-svg-gauges title="03. Radial SVG Telemetry Gauges" />
  ============================================================================
--}}
@props([
    'title' => '03. Radial SVG Telemetry Gauges',
    'badge' => 'SVG GAUGES',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-circular-svg-gauges']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-circular-svg-gauges__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-circular-svg-gauges__body">
        <p>Medidores circulares y semicirculares en SVG puro para CPU, Memoria, Disco y SLA.</p>
        {{ $slot }}
    </div>
</section>
