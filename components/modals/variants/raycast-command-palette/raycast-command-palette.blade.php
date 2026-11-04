{{--
  ============================================================================
  COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (LARAVEL BLADE)
  Archivo: components/modals/variants/raycast-command-palette/raycast-command-palette.blade.php
  Uso: <x-cxd.modals.raycast-command-palette title="01. Command Palette (Cmd+K) Action Center" />
  ============================================================================
--}}
@props([
    'title' => '01. Command Palette (Cmd+K) Action Center',
    'badge' => 'CMD+K PALETTE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-modals-raycast-command-palette']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-modals-raycast-command-palette__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-modals-raycast-command-palette__body">
        <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
        {{ $slot }}
    </div>
</section>
