{{--
  ============================================================================
  COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (LARAVEL BLADE)
  Archivo: components/modals/variants/anchored-context-popover/anchored-context-popover.blade.php
  Uso: <x-cxd.modals.anchored-context-popover title="05. Anchored Context Menu & Quick Popover" />
  ============================================================================
--}}
@props([
    'title' => '05. Anchored Context Menu & Quick Popover',
    'badge' => 'CONTEXT MENU',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-modals-anchored-context-popover']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-modals-anchored-context-popover__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-modals-anchored-context-popover__body">
        <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
        {{ $slot }}
    </div>
</section>
