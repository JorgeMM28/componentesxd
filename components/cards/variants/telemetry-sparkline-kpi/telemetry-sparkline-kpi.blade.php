{{--
  ============================================================================
  COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (LARAVEL BLADE)
  Archivo: components/cards/variants/telemetry-sparkline-kpi/telemetry-sparkline-kpi.blade.php
  Uso: <x-cxd.cards.telemetry-sparkline-kpi title="02. Telemetry KPI + SVG Sparkline Card" />
  ============================================================================
--}}
@props([
    'title' => '02. Telemetry KPI + SVG Sparkline Card',
    'badge' => 'LIVE METRIC',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-telemetry-sparkline-kpi']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-telemetry-sparkline-kpi__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-telemetry-sparkline-kpi__body">
        <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
        {{ $slot }}
    </div>
</section>
