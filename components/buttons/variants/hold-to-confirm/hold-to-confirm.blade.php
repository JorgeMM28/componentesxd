{{--
  ============================================================================
  COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (LARAVEL BLADE)
  Archivo: components/buttons/variants/hold-to-confirm/hold-to-confirm.blade.php
  Uso: <x-cxd.buttons.hold-to-confirm title="03. Destructive Hold-to-Confirm Button" />
  ============================================================================
--}}
@props([
    'title' => '03. Destructive Hold-to-Confirm Button',
    'badge' => 'SAFETY LOCK',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-hold-to-confirm']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-hold-to-confirm__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-hold-to-confirm__body">
        <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
        {{ $slot }}
    </div>
</section>
