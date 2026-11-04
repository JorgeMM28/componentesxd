{{--
  ============================================================================
  COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (LARAVEL BLADE)
  Archivo: components/modals/variants/slide-over-inspector-drawer/slide-over-inspector-drawer.blade.php
  Uso: <x-cxd.modals.slide-over-inspector-drawer title="02. Slide-Over Telemetry Inspector Drawer" />
  ============================================================================
--}}
@props([
    'title' => '02. Slide-Over Telemetry Inspector Drawer',
    'badge' => 'SIDE DRAWER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-modals-slide-over-inspector-drawer']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-modals-slide-over-inspector-drawer__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-modals-slide-over-inspector-drawer__body">
        <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
        {{ $slot }}
    </div>
</section>
