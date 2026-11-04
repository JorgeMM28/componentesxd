{{--
  ============================================================================
  COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (LARAVEL BLADE)
  Archivo: components/buttons/variants/magnetic-precision/magnetic-precision.blade.php
  Uso: <x-cxd.buttons.magnetic-precision title="01. Magnetic Cursor-Tracking Button" />
  ============================================================================
--}}
@props([
    'title' => '01. Magnetic Cursor-Tracking Button',
    'badge' => 'MAGNETIC',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-magnetic-precision']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-magnetic-precision__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-magnetic-precision__body">
        <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
        {{ $slot }}
    </div>
</section>
