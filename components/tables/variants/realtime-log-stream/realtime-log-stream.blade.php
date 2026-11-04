{{--
  ============================================================================
  COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (LARAVEL BLADE)
  Archivo: components/tables/variants/realtime-log-stream/realtime-log-stream.blade.php
  Uso: <x-cxd.tables.realtime-log-stream title="03. Realtime Telemetry & Log Stream Table" />
  ============================================================================
--}}
@props([
    'title' => '03. Realtime Telemetry & Log Stream Table',
    'badge' => 'NOC / STREAMING',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-tables-realtime-log-stream']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-tables-realtime-log-stream__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-tables-realtime-log-stream__body">
        <p>Matriz densa estilo consola de observabilidad con timestamps al milisegundo, nivel HTTP/Severidad, latencia p99 y filtro rápido.</p>
        {{ $slot }}
    </div>
</section>
