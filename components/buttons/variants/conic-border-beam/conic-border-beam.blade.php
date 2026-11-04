{{--
  ============================================================================
  COMPONENTESXD — 02. Conic Border Beam Button (LARAVEL BLADE)
  Archivo: components/buttons/variants/conic-border-beam/conic-border-beam.blade.php
  Uso: <x-cxd.buttons.conic-border-beam title="02. Conic Border Beam Button" />
  ============================================================================
--}}
@props([
    'title' => '02. Conic Border Beam Button',
    'badge' => 'CSS @PROPERTY',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-conic-border-beam']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-conic-border-beam__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-conic-border-beam__body">
        <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
        {{ $slot }}
    </div>
</section>
