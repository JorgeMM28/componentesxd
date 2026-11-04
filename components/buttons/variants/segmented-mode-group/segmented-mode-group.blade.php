{{--
  ============================================================================
  COMPONENTESXD — 07. Segmented Action Bar with Active Pill (LARAVEL BLADE)
  Archivo: components/buttons/variants/segmented-mode-group/segmented-mode-group.blade.php
  Uso: <x-cxd.buttons.segmented-mode-group title="07. Segmented Action Bar with Active Pill" />
  ============================================================================
--}}
@props([
    'title' => '07. Segmented Action Bar with Active Pill',
    'badge' => 'BUTTON GROUP',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-segmented-mode-group']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-segmented-mode-group__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-segmented-mode-group__body">
        <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
        {{ $slot }}
    </div>
</section>
